import React from 'react'
import Nav from '../Component/Nav'
import Pdf_Data from '../Data/Pdf_Data'

function CorusPDF() {
    return (
        <>
            <Nav ul="no" />
            <div className='div-pdf-download'>
                {Pdf_Data.map((item) => {
                    return (
                        <div key={item.id} id='pdf-download'>
                            <h2>{item.title}</h2>
                            <ul id='icons-download'>
                                <li>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="2em"
                                        color='white'
                                        width="2em">
                                        <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
                                        <path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        color='white'
                                        viewBox="0 0 24 24"
                                        height="2em"
                                        width="2em">
                                        <path d="M8 13h2.55v-3h2.9v3H16l-4 4-4-4m11.35-2.96c2.6.18 4.65 2.32 4.65 4.96a5 5 0 01-5 5H6a6 6 0 01-6-6c0-3.09 2.34-5.64 5.35-5.96A7.496 7.496 0 0112 4a7.49 7.49 0 017.35 6.04M19 18a3 3 0 003-3 2.98 2.98 0 00-2.78-2.96l-1.53-.11-.3-1.5A5.503 5.503 0 0012 6C9.94 6 8.08 7.14 7.13 8.97l-.5.95-1.07.11A3.973 3.973 0 002 14a4 4 0 004 4h13z" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CorusPDF
