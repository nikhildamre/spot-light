'use server'

import { prismaClient } from '@/lib/prismaClient'
import { currentUser } from '@clerk/nextjs/server'

export async function onAuthenticateUser() {
  try {
    const user = await currentUser()

    if (!user) {
      return {
        status: 403,
      }
    }

    // Check if database is accessible
    try {
      const userExists = await prismaClient.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          id: true,
          name: true,
          clerkId: true,
          email: true,
          profileImage: true,
          stripeConnectId: true,
          lastLoginAt: true,
          subscription: true,
          stripeCustomerId: true,
          deletedAt: true,
          createdAt: true,
          updatedAt: true,
        },
      })

      if (userExists) {
        return{
          status: 200,
          user: userExists,
        }
      }
      
      const newUser = await prismaClient.user.create({
        data: {
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
          name: user.firstName + ' ' + user.lastName,
          profileImage: user.imageUrl,
        },
        select: {
          id: true,
          name: true,
          clerkId: true,
          email: true,
          profileImage: true,
          stripeConnectId: true,
          lastLoginAt: true,
          subscription: true,
          stripeCustomerId: true,
          deletedAt: true,
          createdAt: true,
          updatedAt: true,
        },
      })

      if (!newUser) {
        return {
          status: 500,
          message: 'Failed to create user',
        }
      }

      return {
        status: 201,
        user: newUser,
      }
    } catch (dbError: any) {
      console.log('Database Error:', dbError.message)
      
      // Enhanced fallback for any database connection issues
      if (dbError.code === 'P2021' || 
          dbError.message?.includes('does not exist') ||
          dbError.message?.includes("Can't reach database server") ||
          dbError.message?.includes('connection') ||
          dbError.code === 'P1001') {
        
        console.log('⚠️  Database connection failed. Using mock user for development.')
        console.log('Database error details:', {
          code: dbError.code,
          message: dbError.message?.substring(0, 100)
        })
        
        return {
          status: 200,
          user: {
            id: `mock-${user.id}`,
            clerkId: user.id,
            email: user.emailAddresses[0].emailAddress,
            name: user.firstName + ' ' + user.lastName,
            profileImage: user.imageUrl,
            stripeConnectId: null,
            lastLoginAt: new Date(),
            subscription: false,
            stripeCustomerId: null,
            deletedAt: null,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          warning: 'Using mock data - database connection failed'
        }
      }
      
      throw dbError
    }
  } catch (error) {
    console.log('ERROR',error)
    return {status: 500, error: 'Internal Server Error'}
  }
}