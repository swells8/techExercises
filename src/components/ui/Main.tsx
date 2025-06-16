"use client"
import { useRouter } from "next/navigation"

const Main = () => {
    const router = useRouter() 
    return(
        <section className="relative h-screen flex flex-col items-center justify-center text-black bg-cover bg-center" style={{ backgroundImage: "url('/images/Argus_BackGround.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div> 
            <div className="relative z-10 text-center px-4 ">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
                    SEE EVERYTHING. <br/>
                    MISS NOTHING. 
                </h1>
                <p className=" text-sm md:text-xl max-w-md mx-auto mb-4 text-white">
                Argus is an intelligent home surveillance system 
                that does more than just watch — it recognizes.
                </p>
                <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-lime-500 transition" onClick = { () => {
                    router.push("/sign-up")
                }}>
                    Sign-Up 
                </button>
                <p className="mt-4 text-sm font-mono translate-x-40 -translate-y-5 text-white font-extrabold "> 
                
                
                Sign-Up Here!</p>  {/* add a @theme that will import roboto */}

                
            
        
            </div>
            <div></div>
            <svg width="36" height="26" viewBox="0 0 36 26" fill="black" xmlns="http://www.w3.org/2000/svg" className="translate-x-20 -translate-y-10">
                <path d="M2.86008 19.0268L0.891853 2.64611C0.870529 2.46763 0.889999 2.28665 0.948795 
                2.11679C1.00759 1.94693 1.10418 1.79264 1.23128 1.66554C1.35838 1.53844 1.51267 1.44186
                 1.68253 1.38306C1.85238 1.32426 2.03337 1.3048 2.21184 1.32612L18.5942 3.29267C18.8333
                  3.32134 19.0581 3.42206 19.2387 3.58147C19.4193 3.74088 19.5471 3.95144 19.6053 
                  4.1852C19.6634 4.41896 19.649 4.66487 19.5641 4.89029C19.4792 5.11571 19.3278 5.30998 
                  19.1299 5.44731L15.2505 8.13432C21.6523 18.5801 29.6966 17.5623 33.9739 15.9921C34.5987 
                  15.7637 35.3493 16.679 34.9261 17.1895C23.9161 30.3659 14.2261 24.1791 7.82601 15.5051L5.01305 
                  19.5642C4.87562 19.7614 4.68157 19.9123 4.45656 19.9969C4.23154 20.0815 3.98615 20.0958 3.75283 
                  20.0379C3.51951 19.98 3.30924 19.8527 3.14984 19.6727C2.99044 19.4928 2.8894 19.2687 2.86008 
                  19.0301" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            
        </section>


    
    
    );
}

export default Main;