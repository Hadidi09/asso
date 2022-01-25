import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faExclamationTriangle, faHandPointUp, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import service from "../src/service-public2.png";
import service2 from "../src/service-public3.png";
import { page } from "./components/Layout";
const Non = () => {
    return (
        <>
            <Head><title>{page = "Non" }</title></Head>
            <div className="bg-gradient-to-tl from-blue-700 via-blue-500 to-red-500
            text-white w-full  h-full flex flex-col justify-center items-center">
                <h1 className='flex justify-center md:w-72  my-20 text-2xl font-bold text-center ouititle '>Désormais il s'agit de connaître  ton bureau de vote !</h1>
                <button className='rounded-3xl bg-gray-300 p-4'>
                    <Link href="https://www.inscriptionelectorale.service-public.fr/">
                        <a target="_blank" rel="noopener">
                            <Image  src={service} alt="suffrage logo" width={120} height={50} />
                        </a>
                    </Link>
                </button>
                <FontAwesomeIcon icon={faHandPointUp} size="2x" className="text-black mt-2  mr-2  transition duration-300 ease-in hover:text-black   " />
                <p className=' mb-32 w-9/12 sm:w-7/12 md:w-4/12 lg:w-3/12 xl:w-2/12 bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 rounded-3xl p-2 '>
                        <FontAwesomeIcon icon={faInfoCircle} size="2x" className="text-black  mr-2  transition duration-300 ease-in hover:text-black   " />
                        Munis-toi en format dématérialisé de ta carte d'identité et d'un justificatif de domicile 
                </p>
                <div className='flex flex-col items-center place-self-end  mb-3 relative'>
                
                <p className='place-self-end mr-3 mb-2 w-60 bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 rounded-3xl p-2 '>
                    <FontAwesomeIcon icon={faExclamationTriangle} size="2x" className="text-green-500  mr-2  transition duration-300 ease-in hover:text-black   " />
                    Si jamais tu n'es pas là pour les élections, tu peux faire une procuration : </p>
                    <button className='place-self-end mr-3 rounded-3xl bg-gray-300 p-4'>
                        <Link href="https://www.service-public.fr/particuliers/vosdroits/F1604">
                            <a target="_blank" rel="noopener">
                                <Image src={service2} alt="suffrage logo" width={120} height={50} />
                            </a>        
                    </Link>
                    </button>
                
                <FontAwesomeIcon icon={faHandPointRight} size="2x" className="text-black mt-2 absolute  bottom-16 right-40 transition duration-300 ease-in hover:text-black   " />
                    
                
                </div>
                
            </div>
        </>
    );
};

export default Non;