(this["webpackJsonpds-web-app"]=this["webpackJsonpds-web-app"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var i=t(1),a=t.n(i),s=t(6),r=t.n(s),c=(t(11),t(12),t(2)),p=t(5),u=t(3),l=(t(13),t(0));var d=function(){var e=Object(i.useState)({pregnacies:"",glucose:"",blood_pressure:"",skin_thickness:"",insulin_level:"",bmi:"",diabetes_pedigree:"",age:""}),n=Object(u.a)(e,2),t=n[0],a=n[1],s=Object(i.useState)(""),r=Object(u.a)(s,2),d=r[0],o=r[1],b=Object(i.useState)(!1),j=Object(u.a)(b,2),m=j[0],h=j[1],g=function(e){var n=e.target.name,i=e.target.value;a(Object(p.a)(Object(p.a)({},t),{},Object(c.a)({},n,i)))};return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new FormData;n.append("1",t.pregnacies),n.append("2",t.glucose),n.append("3",t.blood_pressure),n.append("4",t.skin_thickness),n.append("5",t.insulin_level),n.append("6",t.bmi),n.append("7",t.diabetes_pedigree),n.append("8",t.age),h(!0),fetch("https://dsmodeldeployment9.herokuapp.com/predict",{method:"POST",body:n}).then((function(e){return e.text()})).then((function(e){o(e),h(!1)}))},children:[Object(l.jsx)("h4",{children:"Diabetes Prediction Model"}),Object(l.jsx)("p",{children:"Example to predict diabetes probability"}),Object(l.jsx)("input",{type:"number",name:"pregnacies",value:t.pregnacies,onChange:g,placeholder:"Number of pregnacies",required:!0}),Object(l.jsx)("input",{type:"number",name:"glucose",value:t.glucose,onChange:g,placeholder:"Glucose level in sugar",required:!0}),Object(l.jsx)("input",{type:"number",name:"blood_pressure",value:t.blood_pressure,onChange:g,placeholder:"Blood pressure",required:!0}),Object(l.jsx)("input",{type:"number",name:"skin_thickness",value:t.skin_thickness,onChange:g,placeholder:"Skin Thickness",required:!0}),Object(l.jsx)("input",{type:"number",name:"insulin_level",value:t.insulin_level,onChange:g,placeholder:"Insulin Level",required:!0}),Object(l.jsx)("input",{type:"number",name:"bmi",value:t.bmi,onChange:g,placeholder:"BMI",required:!0}),Object(l.jsx)("input",{type:"number",name:"diabetes_pedigree",value:t.diabetes_pedigree,onChange:g,placeholder:"Diabetes Pedigree",required:!0}),Object(l.jsx)("input",{type:"number",name:"age",value:t.age,onChange:g,placeholder:"Age",required:!0}),Object(l.jsx)("button",{type:"submit",disabled:m,children:m?"Predicting results...":"Submit form"}),d&&Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:d},className:"result"}),d&&Object(l.jsx)("span",{onClick:function(){a({pregnacies:"",glucose:"",blood_pressure:"",skin_thickness:"",insulin_level:"",bmi:"",diabetes_pedigree:"",age:""}),o("")},children:"Clear Prediction"})]})};var o=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("main",{className:"App-main",children:Object(l.jsx)(d,{})})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.472a7efd.chunk.js.map