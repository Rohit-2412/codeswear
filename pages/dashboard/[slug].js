import React from 'react'
import { useRouter } from 'next/router'
const Account = () => {
    const router = useRouter()
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-5">Welcome : {router.query.slug}</h1>
        </div>
    )
}

export default Account