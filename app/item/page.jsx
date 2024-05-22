import React from 'react'

export default function item() {

    const list = [
        pic[
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.getcake.co.il%2Fblog%2F%25D7%25A2%25D7%2595%25D7%2592%25D7%2595%25D7%25AA-%25D7%259E%25D7%25A2%25D7%2595%25D7%25A6%25D7%2591%25D7%2595%25D7%25AA-%25D7%259C%25D7%2599%25D7%259C%25D7%2593%25D7%2599%25D7%259D&psig=AOvVaw2X12elWgE5FLxG1KtxNttl&ust=1716398908322000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjiua6in4YDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbat12.co.il%2F%25D7%25A2%25D7%2595%25D7%2592%25D7%2595%25D7%25AA-%25D7%259E%25D7%25A2%25D7%2595%25D7%25A6%25D7%2591%25D7%2595%25D7%25AA%2F&psig=AOvVaw2X12elWgE5FLxG1KtxNttl&ust=1716398908322000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjiua6in4YDFQAAAAAdAAAAABAJ",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cakefactory.co.il%2F%25D7%25A2%25D7%2595%25D7%2592%25D7%2595%25D7%25AA-%25D7%2599%25D7%2595%25D7%259D-%25D7%2594%25D7%2595%25D7%259C%25D7%2593%25D7%25AA-%25D7%259C%25D7%2591%25D7%25A0%25D7%2595%25D7%25AA&psig=AOvVaw2X12elWgE5FLxG1KtxNttl&ust=1716398908322000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjiua6in4YDFQAAAAAdAAAAABARF"
        ],
        info[
        "עוגת יום הולדת בכל הגדלים ת לכל הגילאים ת בהזמנה אישית"
        ]

    ]

    return (

        <div>
            {list.map((p) => {
                return (
                    <div>
                        <div>
                          <img src= {p.pic} about={p.info}/>
                        </div>

                        <div>
                            {p.info}
                        </div>
                    </div>
                )
            })}


            Item
        </div>
    )
}
