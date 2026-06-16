import React from 'react';

const LetterLayout=({ children }:{children:React.ReactNode}) => {
    return (
        <div>
            <main className='pt-20 print:pt-0 print:0'>
                {children}
            </main>
        </div>
    );
};

export default LetterLayout