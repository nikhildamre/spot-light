import { onAuthenticateUser } from '@/actions/auth'
import { redirect } from 'next/navigation'

//TODO: Implement the auth callback page
export const dynamic = 'force-dynamic'

const AuthCallbackPage = async () => {
  const auth = await onAuthenticateUser()

  if (auth.status === 200 || auth.status === 201) {
    redirect('/home')
  } else if(
    auth.status===403||auth.status===500||auth.status===400
  ){
    redirect('/')
  }
}

export default AuthCallbackPage