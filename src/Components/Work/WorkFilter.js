import React, { useState } from 'react';

const Datas = [
    {
        id: 1,
        Name: 'Samosa',
        image: 'https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800',
        Category: 'BreakFast',
        Price: '12$'
    },
    {
        id: 2,
        Name: 'Bread',
        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Basic-Homemade-Bread_EXPS_TOHcom20_32480_C01_26_2b-63.jpg',
        Category: 'BreakFast',
        Price: '12$'
    },
    {
        id: 3,
        Name: 'Porota',
        image: 'https://c.ndtvimg.com/2023-01/qhqiliag_parotta_625x300_13_January_23.jpg',
        Category: 'BreakFast',
        Price: '12$'
    },
    {
        id: 4,
        Name: 'Fried Rice',
        image: 'https://www.yummyoyummy.com/wp-content/uploads/2020/12/IMG_3623-scaled.jpg',
        Category: 'Launch',
        Price: '12$'
    },
    {
        id: 5,
        Name: 'Chow-Mein',
        image: 'https://easycoolways.com/images/Easy_Recipe/Snacks/68_veg_chow_mein/4x3/veg-chow-mein.jpg',
        Category: 'Launch',
        Price: '12$'
    },
    {
        id: 6,
        Name: 'Soup with Wonthon',
        image: 'https://images.squarespace-cdn.com/content/v1/56cf7cfb0442626af6cd8f70/c8c5e302-961f-417f-8fd0-d29795829ef2/IMG_3240.jpg',
        Category: 'Launch',
        Price: '12$'
    },
    {
        id: 7,
        Name: 'Soup with Wonthon',
        image: 'https://www.healthylittlefoodies.com/wp-content/uploads/2022/03/vegetable-rice-bowl-close.jpg',
        Category: 'Dinner',
        Price: '12$'
    },
    {
        id: 8,
        Name: 'Kacchi',
        image: 'https://c.ndtvimg.com/2019-06/s71ihu9_biryani_625x300_05_June_19.jpg',
        Category: 'Dinner',
        Price: '12$'
    },
    {
        id: 9,
        Name: 'Murog Polow',
        image: 'https://www.thedeliciouscrescent.com/wp-content/uploads/2016/07/Saffron-Chicken-Zereshk-Polo-Square.jpg',
        Category: 'Dinner',
        Price: '12$'
    },
]

const WorkFilter = () => {

    const [items, setItems] = useState(Datas)

    const filterItem = (updateCategory) =>{
        const updateItem = items.filter((menuCategory)=>
             menuCategory.Category === updateCategory
        )
        setItems(updateItem)
    }

    return (
        <div>
            <div className='navbar'>
                <ul className='flex justify-center text-[18px]'>
                    <li><button onClick={()=>setItems(Datas)}>ALL</button></li>
                    <li className='mx-[50px]'><button onClick={()=> filterItem('BreakFast')} >HTML & CSS</button></li>
                    <li><button onClick={()=> filterItem('Launch')}>REACT JS</button></li>
                    <li className='ms-[50px]'><button onClick={()=> filterItem('Dinner')}>WORDPRESS</button></li>
                </ul>
            </div>

            <div className="work__items grid grid-cols-3 gap-[30px]">
                {
                    items.map(item => {
                        const {id, Name, image, Category, Price} = item
                        return(
                            <div className='item' key={id}>
                                <img className='h-[250px] w-[100%]' src={image} />
                                <div className="item__info p-[5px]">
                                    <h4>Name: {Name}</h4>
                                    <p>Category: {Category}</p>
                                    <p>Price: {Price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default WorkFilter;