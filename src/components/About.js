import React , {useState} from 'react'

export default function About(props) {
    const [Style, setStyle] = useState({
        color:'black',
        backgroundColor:'white',
    });
    const [btnStyle, setbtnStyle] = useState({
        color:'white',
        backgroundColor:'black',
        border:'solid 1px black'
    })

    const [btnText, setbtnText] = useState(
        'Enable Dark Mode')
    const Toggle =()=>
    {
        if(Style.color=='white')
        {
            setStyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtnText('Enable dark Mode')
            setbtnStyle({
                color:'white',
                backgroundColor:'black'
            })
        }
        else{
            setStyle({
                color:'white',
                backgroundColor:'black'
            })
            setbtnText('Enable light Mode')
            setbtnStyle({
                color:'black',
                backgroundColor:'white',
                border:'solid 1px black'
            })
        }
    }
  return (
    <div className='container'>
        <h2>About Us</h2>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={Style}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={Style}>
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" style={Style}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={Style}>
      <div className="accordion-body" style={Style}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" style={Style}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" style={Style}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={Style}>
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <button type='Button' className='btn my-3' onClick={Toggle} style={btnStyle}>{btnText}</button>
</div>
</div>
  )
}
