import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { CatchAllRoute } from '@x/builderio';



export default function HomePage () {

return (
<div>
    <div className='heroDiv'>
        <div className='h1Container'>
            <h1>
                Home Page
            </h1>
        </div>
    </div>
    <CatchAllRoute />
</div>
)
}

