(this.webpackJsonprokt=this.webpackJsonprokt||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),o=a.n(c),s=(a(23),a(6)),l=a(2),i=a(3),u=a(4),m=a(5),p=a(17),h=a.n(p),f=function(e){return h.a.get("".concat("https://api.github.com","/search/repositories?q=stars&page=").concat(e,"&per_page=16"))},g=function(e,t){return"asc"===t?e.sort((function(e,t){return e.stargazers_count-t.stargazers_count})):"desc"===t?e.sort((function(e,t){return t.stargazers_count-e.stargazers_count})):e},d=function(e){return n.a.createElement("div",{className:"repo"},n.a.createElement("img",{src:e.repo.owner.avatar_url,alt:e.repo.name}),n.a.createElement("div",{className:"items-container"},n.a.createElement("ul",{className:"items"},n.a.createElement("li",null,"Owner: ",e.repo.owner.login),n.a.createElement("li",null,"ID: ",e.repo.id),n.a.createElement("li",null,"Name: ",e.repo.name),n.a.createElement("li",null,"Stars: ",e.repo.stargazers_count),n.a.createElement("li",null,"Watchers: ",e.repo.watchers_count))))},E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:""},e.handleChange=function(t){e.props.search(t.target.value)},e.handleStarSort=function(t){e.props.startSorting(t.target.value)},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"filters"},n.a.createElement("label",{className:"check-container",onClick:this.handleStarSort},"filter stars \u2191",n.a.createElement("input",{type:"radio",name:"filter",value:"asc"}),n.a.createElement("span",{className:"checkmark"})),n.a.createElement("label",{className:"check-container",onClick:this.handleStarSort},"filter start \u2193",n.a.createElement("input",{type:"radio",name:"filter",value:"desc"}),n.a.createElement("span",{className:"checkmark"})),n.a.createElement("input",{className:"filter-input",onChange:this.handleChange,placeholder:"Enter word to filter"}))}}]),a}(r.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={repos:[],page:1,loading:!0,searchTerm:""},e.loadMore=function(){e.setState({loading:!0}),f(e.state.page).then((function(t){return e.mergeData(t)})).catch((function(e){console.log(e)}))},e.searchFilter=function(t){e.setState({searchTerm:t})},e.sortStar=function(t){var a=g(e.state.repos,t);e.setState({repos:Object(s.a)(a)})},e.mergeData=function(t){e.setState((function(e){var a=e.repos,r=e.page;return{repos:[].concat(Object(s.a)(a),Object(s.a)(t.data.items)),page:r+1,loading:!1}}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f(this.state.page).then((function(t){e.mergeData(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.repos,r=t.loading;return n.a.createElement("div",{className:"container"},n.a.createElement(E,{search:this.searchFilter,startSorting:this.sortStar}),n.a.createElement("div",{className:"repos"},a.filter((function(t){return t.name.toLowerCase().includes(e.state.searchTerm.toLowerCase())})).map((function(e){return n.a.createElement(d,{key:e.id,repo:e})}))),n.a.createElement("div",{className:"bottom"},n.a.createElement("button",{className:"btn",onClick:this.loadMore},r?"Loading...":"Load More")))}}]),a}(r.Component);o.a.render(n.a.createElement(v,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7c3ebb90.chunk.js.map