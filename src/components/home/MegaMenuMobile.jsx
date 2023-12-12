import React, { Component } from "react";

class MegaMenu extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
    };
  }

  handleAccordionClick = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  render() {
    return (
      <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">
          {Array.from({ length: 10 }, (_, index) => (
            <React.Fragment key={index}>
              <button
                className={`accordionMobile ${
                  this.state.activeIndex === index ? "active" : ""
                }`}
                onClick={() => this.handleAccordionClick(index)}
              >
                <img
                  className="accordionMenuIconMobile"
                  src="https://image.flaticon.com/icons/png/128/739/739249.png"
                  alt={`Icon ${index}`}
                />
                &nbsp; Men's Clothing
              </button>
              <div
                className="panelMobile"
                style={{
                  maxHeight: this.state.activeIndex === index ? "500px" : "0",
                }}
              >
                <ul>
                  <li>
                    <a href="#" className="accordionItemMobile">
                      {" "}
                      Mans Tshirt 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="accordionItemMobile">
                      {" "}
                      Mans Tshirt 2
                    </a>
                  </li>
                </ul>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default MegaMenu;

// import React, { Component, Fragment } from "react";

// class MegaMenuMobile extends Component {
//   constructor() {
//     super();
//     this.MegaMenu = this.MegaMenu.bind(this);
//   }

//   componentDidMount() {
//     this.MegaMenu();
//   }

//   MegaMenu() {
//     var acc = document.getElementsByClassName("accordionMobile");
//     var accNum = acc.length;
//     var i;
//     for (i = 0; i < accNum; i++) {
//       acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//           panel.style.maxHeight = null;
//         } else {
//           panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="accordionMenuDivMobile">
//         <div className="accordionMenuDivInsideMobile">
//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordionMobile">
//             <img
//               className="accordionMenuIconMobile"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panelMobile">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItemMobile">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default MegaMenuMobile;
