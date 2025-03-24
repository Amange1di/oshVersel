import { SupportBanner, SupportPartners, SupportPayment, SupportValue } from '../../widgets';
import './supportPage.scss';

export const SupportPage = () => {
  return (
    <main className='container'>
       <SupportBanner/>
       <SupportValue/>
       <SupportPartners/>
       <SupportPayment/>
    </main>
  )
}