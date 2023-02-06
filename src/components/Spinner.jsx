import React from 'react'

export default function Spinner() {
    return (
        <div className="row mt-3">
            <div className="col">
                <div className="lds-ripple align-self-center">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
