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
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">
          {Array.from({ length: 10 }, (_, index) => (
            <React.Fragment key={index}>
              <button
                className={`accordion ${
                  this.state.activeIndex === index ? "active" : ""
                }`}
                onClick={() => this.handleAccordionClick(index)}
              >
                {/* <Shirt /> */}
                <img
                  className="accordionMenuIcon"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93bi1zcXVhcmUiPjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeD0iMyIgeT0iMyIgcng9IjIiLz48cGF0aCBkPSJtMTYgMTAtNCA0LTQtNCIvPjwvc3ZnPg=="
                  alt={`Icon ${index}`}
                />
                &nbsp; Men's Clothing
              </button>
              <div
                className="panel"
                style={{
                  maxHeight: this.state.activeIndex === index ? "500px" : "0",
                }}
              >
                <ul>
                  <li>
                    <a href="#" className="accordionItem">
                      {" "}
                      Mans Tshirt 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="accordionItem">
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

// import React, { Component } from "react";

// class MegaMenu extends Component {
//   constructor() {
//     super();
//     this.MegaMenu = this.MegaMenu.bind(this);
//   }

//   componentDidMount() {
//     this.MegaMenu();
//   }

//   MegaMenu() {
//     var acc = document.getElementsByClassName("accordion");
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
//       <div className="accordionMenuDiv">
//         <div className="accordionMenuDivInside">
//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 2
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="accordion">
//             <img
//               className="accordionMenuIcon"
//               src="https://image.flaticon.com/icons/png/128/739/739249.png"
//             />
//             &nbsp; Men's Clothing
//           </button>
//           <div className="panel">
//             <ul>
//               <li>
//                 <a href="#" className="accordionItem">
//                   {" "}
//                   Mans Tshirt 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="accordionItem">
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

// export default MegaMenu;
