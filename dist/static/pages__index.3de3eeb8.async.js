webpackJsonp([4],{"9+6m":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return v});var a=n("IDPl"),l=n.n(a),i=n("cYhT"),o=n.n(i),c=n("bMv6"),r=n.n(c),s=n("Y+8b"),m=n.n(s),u=n("kLfz"),d=n.n(u),f=n("mG+w"),h=n.n(f),k=n("ykY/"),E=h.a.createElement("i",{className:"iconfont icon-caidan"}),p=h.a.createElement("div",{className:"mid_title"},"Share"),C=h.a.createElement("p",{className:"mod_tips"},"I'd like to meet people to..."),v=function(e){function t(e){var n;return l()(this,t),n=m()(this,d()(t).call(this,e)),n.showMenu=function(){var e=n.state.isMenu;e?(document.getElementById("root").removeAttribute("style"),document.getElementById("root").removeAttribute("class")):(document.getElementById("root").style.overflow="hidden",document.getElementById("root").setAttribute("class","pageShowContent")),n.setState({isMenu:0==e})},n.state={isMenu:!1},n}return r()(t,[{key:"componentWillMount",value:function(){document.title=window.title+" - KINDNESS Exchange"}},{key:"render",value:function(){var e=this,t=(this.state.isMenu,function(t){e.props.history.push("page?t=share&k="+t)});return h.a.createElement("div",{className:"mod_center",style:{height:"100%"}},h.a.createElement("div",{className:"mod_header","data-flex":"dir:left cross:center main:justify"},h.a.createElement("a",{onClick:this.showMenu,className:"left_link"},E),p),h.a.createElement("div",{className:"mod_content",style:{height:"100%"},"data-flex":"main:center cross:center"},h.a.createElement("div",{style:{width:"100%"}},C,h.a.createElement("a",{onClick:function(){return t("English")},className:"mod_menu"},"Share English"),h.a.createElement("a",{onClick:function(){return t("Chinese")},className:"mod_menu"},"Share Chinese"),h.a.createElement("a",{onClick:function(){return t("Chinese Cuisine")},className:"mod_menu"},"Share Cooking(Chinese Cuisine)"),h.a.createElement("a",{onClick:function(){return t("Foreign Cuisine")},className:"mod_menu"},"Share Cooking(Foreign Cuisine)"),h.a.createElement("a",{onClick:function(){return t("Museum")},className:"mod_menu"},"Go to Museum"),h.a.createElement("a",{onClick:function(){return t("all")},className:"mod_menu"},"Share Anything"))),h.a.createElement(k.a,{cartCount:1,location:this.props.location,afterClick:this.showMenu}))}}]),o()(t,e),t}(f.PureComponent)},"ykY/":function(e,t,n){"use strict";var a=n("IDPl"),l=n.n(a),i=n("cYhT"),o=n.n(i),c=n("bMv6"),r=n.n(c),s=n("Y+8b"),m=n.n(s),u=n("kLfz"),d=n.n(u),f=n("mG+w"),h=n.n(f),k=n("/yVg"),E=n.n(k),p=n("Ue9x"),C=n("nVDU"),v=n("fiaM"),y=n("aSYM"),g=h.a.createElement("span",{className:"hongdian"}),N=function(e){function t(e){var n;return l()(this,t),n=m()(this,d()(t).call(this,e)),n.load=function(){Object(C.a)(y.i).then(function(e){Object(v.a)(e)&&n.setState({load_count:e.total,knp:e.kpn})})},n.displayName="LeftMenu",n.state={actionKey:"",load_count:0,knp:0},n}return r()(t,[{key:"componentWillMount",value:function(){this.load()}},{key:"render",value:function(){var e=this.props,t=(e.location,e.afterClick),n=(e.cartCount,this.state),a=n.load_count,l=n.knp;return[h.a.createElement("div",{"data-flex":"dir:top",id:"leftMenuPanel"},h.a.createElement("div",{"data-flex":"dir:top",className:"menuPabel"},h.a.createElement("div",{"data-flex":"dir:left cross:center main:center",className:"userContent"},h.a.createElement("img",{src:p.a.headpic}),h.a.createElement("div",{"data-flex":"dir:top",style:{paddingLeft:"30px"}},h.a.createElement("span",null,p.a.nickname),h.a.createElement("font",{style:{color:"rgb(183, 183, 183)"}},l," KNP")))),h.a.createElement("div",{className:"left_menu_panel"},h.a.createElement(E.a,{key:"/",onClick:t,"data-flex":"main:left cross:center dir:left",to:"/"},"Share"),h.a.createElement(E.a,{key:"/learn",onClick:t,"data-flex":"main:left cross:center dir:left",to:"/learn"},"Learn"),h.a.createElement(E.a,{key:"/profile",onClick:t,"data-flex":"main:left cross:center dir:left",to:"/profile"},"Profile"),h.a.createElement(E.a,{key:"/msg",onClick:t,"data-flex":"main:left cross:center dir:left",to:"/msg"},"Messages",a>0&&g))),h.a.createElement("div",{id:"maskPanel",onClick:t,className:"maskPanel"})]}}]),o()(t,e),t}(h.a.Component);t.a=N}});