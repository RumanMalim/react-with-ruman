import React from 'react'
import { Link, } from 'react-router-dom';
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://file.aiquickdraw.com/imgcompressed/img/compressed_6d892516d83ad76d69a69826f095cb4e.webp"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            In a world driven by constant innovation, clarity and purpose stand as pillars of true progress. Every challenge carries within it the seeds of opportunity, waiting to be nurtured by thoughtful action and persistence.

                             Even in moments of uncertainty, integrity and vision guide us forward. With resilience as our compass, we navigate the complexities of life—facing obstacles not as burdens, but as steps toward growth and understanding.


                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}