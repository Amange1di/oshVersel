import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowUpRight,  } from "react-icons/go";
import './books.scss';

const Books = ({ title, description, id, setVisible, isVisible }) => { 
    const isOpen = isVisible === id; 

    return (
        <div>
            <div 
                onClick={() => setVisible(isOpen ? null : id)}
                style={{
                    backgroundColor: '#105B60',
                    width: 1319,
                    padding: '1.2rem',
                }} 
                className='container books-enemy'
            >
                <div className='services_title_block'> 
                    <div>
                        <h3 className='services_id'>{id}/ </h3>
                    </div>  
                    <div>
                        <h3 className="services_title">{title}</h3>
                    </div>  
                    <div>
                        <button className='services_btn'>
                            <motion.div 
                                animate={{ rotate: isOpen ? 180 : 0 }} 
                                transition={{ duration: 0.3 }}
                            >
                                <GoArrowUpRight />
                            </motion.div>
                        </button>
                    </div> 
                </div>
            </div>

            <AnimatePresence mode="wait">       
                {isOpen && (
                    <motion.div 
                        className='container block'
                        initial={{ height: 0, opacity: 0 }}  
                        animate={{ height: 'auto', opacity: 1 }}    
                        exit={{ height: 0, opacity: 0 }} 
                        transition={{ duration: 0.3 }} 
                    >
                        <div className='services-img'></div>
                        <div>
                            <p className='services-text'>{description}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Books;
