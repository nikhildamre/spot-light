'use client'

import { useEffect, useState } from 'react'

export const useDevicePermissions = () => {
  const [hasCamera, setHasCamera] = useState(false)
  const [hasMicrophone, setHasMicrophone] = useState(false)
  const [permissionsChecked, setPermissionsChecked] = useState(false)

  useEffect(() => {
    const checkDevicePermissions = async () => {
      try {
        // Check if devices are available
        const devices = await navigator.mediaDevices.enumerateDevices()
        const videoDevices = devices.filter(device => device.kind === 'videoinput')
        const audioDevices = devices.filter(device => device.kind === 'audioinput')

        setHasCamera(videoDevices.length > 0)
        setHasMicrophone(audioDevices.length > 0)

        // Try to get user media to check permissions
        if (videoDevices.length > 0 || audioDevices.length > 0) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              video: videoDevices.length > 0,
              audio: audioDevices.length > 0
            })
            
            // Stop the stream immediately as we just wanted to check permissions
            stream.getTracks().forEach(track => track.stop())
          } catch (permissionError) {
            console.log('Device permission denied or not available:', permissionError)
          }
        }
      } catch (error) {
        console.log('Error checking device permissions:', error)
      } finally {
        setPermissionsChecked(true)
      }
    }

    checkDevicePermissions()
  }, [])

  return {
    hasCamera,
    hasMicrophone,
    permissionsChecked
  }
}