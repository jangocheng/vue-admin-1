(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01420e4c"],{"2e09":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",{attrs:{shadow:""}},[a("VaDyform",{attrs:{api:e.api,foot_hide:!1}}),a("div",{staticStyle:{"text-align":"right","font-size":"12px",color:"#808695",transform:"scale(0.8)"}},[e._v("via iadypage")])],1)],1)},i=[],r=(a("ac6a"),a("cadf"),a("551c"),a("097d"),a("f50c")),n={name:"va_dyform_route",components:{VaDyform:r["a"]},data:function(){return{api:this.$route.meta.api}},created:function(){},beforeMount:function(){this.loadData()},methods:{loadData:function(){if("dyform"==this.$route.meta.dytype){var e=this,t=this.$route.params.length;t>0?(this.$route.params.forEach(function(t){e.$route.meta.api=e.$route.meta.api+"/"+e.$route.params[t]}),e.api=e.$route.meta.api):e.api=e.$route.meta.api}}},watch:{$route:function(){}}},s=n,m=a("2877"),l=Object(m["a"])(s,o,i,!1,null,null,null);l.options.__file="va_dyform_route.vue";t["default"]=l.exports},"80b4":function(e,t,a){},"9d12":function(e,t,a){"use strict";var o=a("80b4"),i=a.n(o);i.a},f50c:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-wrapper"},[""!=this.data?[a("Form",{ref:e.ref,attrs:{model:e.data.form_values,"label-position":e.label_position,"label-width":e.label_width,rules:e.data.form_rules},nativeOn:{submit:function(e){e.preventDefault()}}},[e._l(e.data.form_items,function(t,o,i){return[""!=e.data.form_rules[t.name]?[a("VaDyformItem",{key:i,ref:"dyformitem_"+t.name,refInFor:!0,attrs:{item:t,form_values:e.data.form_values,prop:t.name}})]:""==e.data.form_rules[t.name]?[a("VaDyformItem",{key:i,ref:"dyformitem_"+t.name,refInFor:!0,attrs:{item:t,form_values:e.data.form_values}})]:e._e()]}),0==this.foot_hide?a("div",[a("Divider"),a("FormItem",{staticStyle:{"text-align":"left"}},[a("Button",{staticStyle:{"margin-right":"15px"},attrs:{loading:e.loading,type:"primary",size:"large"},on:{click:function(t){e.submit()}}},[e._v("确认提交")]),a("Button",{attrs:{type:"text",size:"large"},on:{click:function(t){e.cancel()}}},[e._v("取消操作")])],1)],1):e._e()],2)]:[a("Row",[a("Col",{staticClass:"spin-col",attrs:{span:"24"}},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"22"}}),a("div",[e._v("Loading")])],1)],1)],1)]],2)},i=[],r=a("795b"),n=a.n(r),s=(a("7f7f"),a("cadf"),a("551c"),a("097d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("FormItem",{attrs:{label:e.item.title,prop:e.prop}},["divider"==e.item.type?[a("Divider")]:e._e(),"static"==e.item.type?[a("span",[e._v(e._s(e.item.value))])]:e._e(),"text"==e.item.type?[a("Input",{attrs:{placeholder:e.item.extra.placeholder},model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}})]:"textarea"==e.item.type?[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:e.item.extra.placeholder},model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}})]:"array"==e.item.type?[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:e.item.extra.placeholder},model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}})]:"select"==e.item.type?[a("Select",{model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}},e._l(e.item.extra.options,function(t,o,i){return a("Option",{key:i,attrs:{value:t.value}},[e._v("\n                  "+e._s(t.title)+"\n              ")])}),1)]:"radio"==e.item.type?[a("RadioGroup",{model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}},e._l(e.item.extra.options,function(t,o,i){return a("Radio",{key:i,attrs:{label:t.value}},[a("span",[e._v(e._s(t.title))])])}),1)]:"checkbox"==e.item.type?[a("CheckboxGroup",{model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}},e._l(e.item.extra.options,function(e,t,o){return a("Checkbox",{key:o,attrs:{label:e.title}})}),1)]:"switch"==e.item.type?[a("i-switch",{attrs:{size:"large"},model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v(e._s(e.item1.extra.options[0].title))]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v(e._s(e.item1.extra.options[1].title))])])]:"slider"==e.item.type?[a("Slider",{attrs:{range:""},model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}})]:"datepicker"==e.item.type?[a("DatePicker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.iform_values[e.item.name],callback:function(t){e.$set(e.iform_values,e.item.name,t)},expression:"iform_values[item.name]"}})]:"timepicker"==e.item.type?[a("TimePicker",{attrs:{type:"time",placeholder:"选择时间"},model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}})]:"datetimepicker"==e.item.type?[a("Row",[a("Col",{attrs:{span:"11"}},[a("DatePicker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form_values[e.item.name][0],callback:function(t){e.$set(e.form_values[e.item.name],0,t)},expression:"form_values[item.name][0]"}})],1),a("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[e._v("-")]),a("Col",{attrs:{span:"11"}},[a("TimePicker",{attrs:{type:"time",placeholder:"选择时间"},model:{value:e.form_values[e.item.name][1],callback:function(t){e.$set(e.form_values[e.item.name],1,t)},expression:"form_values[item.name][1]"}})],1)],1)]:"rate"==e.item.type?[a("Rate",{model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}})]:"cascader"==e.item.type?[a("Cascader",{attrs:{data:e.item.extra.options,size:"large"},model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}})]:"colorpicker"==e.item.type?[a("ColorPicker",{model:{value:e.form_values[e.item.name],callback:function(t){e.$set(e.form_values,e.item.name,t)},expression:"form_values[item.name]"}})]:"file"==e.item.type?[a("Upload",{attrs:{type:"drag",action:e.item.action}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"42"}}),a("p",[e._v("点击或者拖动文件到此处上传")])],1)])]:"files"==e.item.type?[a("Upload",{attrs:{multiple:"",type:"drag",action:e.item.action}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"42"}}),a("p",[e._v("点击或者拖动文件到此处上传")])],1)])]:"checkboxtree"==e.item.type?[a("tree-table",{ref:"checkboxtree_"+e.item.name,attrs:{"expand-key":e.item.extra.expand_key,"is-fold":!0,border:!0,stripe:!1,selectable:!0,"expand-type":!1,columns:e.item.extra.columns,data:e.item.extra.data}})]:"formlist"==e.item.type?[a("Row",e._l(e.item.extra.options,function(t,o,i){return a("div",{key:i},[a("Col",{attrs:{span:t.span}},[e._v("\n                      "+e._s(t.title)+"\n                  ")])],1)}),0),e._l(e.form_values[e.item.name],function(t,o,i){return a("Row",{key:i},[e._l(e.item.extra.options,function(t,i,r){return a("div",{key:r},[a("Col",{attrs:{span:t.span}},[a("Input",{model:{value:e.form_values[e.item.name][o][t.value],callback:function(a){e.$set(e.form_values[e.item.name][o],t.value,a)},expression:"form_values[item.name][key2][item3.value]"}})],1)],1)}),a("Button",{attrs:{type:"dashed"},on:{click:function(t){e.formlist_delrow(e.item.name)}}},[e._v("删除")])],2)}),a("Button",{staticStyle:{"margin-top":"8px"},attrs:{type:"dashed",icon:"md-add"},on:{click:function(t){e.formlist_addrow(e.item.name)}}},[e._v("增加一行")])]:e._e(),a("div",{staticStyle:{color:"#aaa","font-size":"12px"}},[e._v(e._s(e.item.extra.tip))])],2)],1)}),m=[],l={name:"va_dyform_item",props:{prop:"",item:{},form_values:{}},created:function(){},beforeMount:function(){},methods:{formlist_addrow:function(e){this.form_values[e].push(new Object)},getChecked:function(e){return this.$refs["checkboxtree_"+this.item.name].getCheckedProp(e)}},watch:{}},c=l,u=a("2877"),f=Object(u["a"])(c,s,m,!1,null,null,null);f.options.__file="va_dyform_item.vue";var d=f.exports,p={name:"DynamicForm",components:{VaDyformItem:d},props:{api:"",foot_hide:!1},data:function(){return{loading:!1,ref:"form",data:"",label_position:"right",label_width:100}},created:function(){this.ref="form_"+(new Date).getTime()},beforeMount:function(){},mounted:function(){this.loadData()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},computed:{},methods:{loadData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""!=e&&(this.api=e),this.api){var t=this;axios.get(this.api).then(function(e){e=e.data,"200"==e.code?(0==e.data.form_data.form_rules.length&&(e.data.form_data.form_rules=new Object),t.data=e.data.form_data):t.$Message.error(e.msg)}).catch(function(e){console.log(e)})}},submit:function(){this.loading=!0;var e=this;for(var t in e.data.form_items)if("checkboxtree"==e.data.form_items[t].type){var a=e.$refs["dyformitem_"+e.data.form_items[t].name][0].getChecked("admin_auth");e.data.form_values[e.data.form_items[t].name]=a}if(0==this.data.form_rules.length)return this.submitForm();this.$refs[e.ref].validate(function(t){if(t)return e.submitForm()})},submitForm:function(){var e=this,t=this;switch(this.data.form_method){case"post":return new n.a(function(a,o){axios.post(e.api,e.data.form_values).then(function(e){e=e.data,"200"==e.code?(t.$Message.success(e.msg),t.$Modal.remove()):t.$Message.error(e.msg),t.loading=!1,a(e)}).catch(function(e){t.loading=!1,o(e)})});case"put":axios.put(this.api,this.data.form_values).then(function(e){if(e=e.data,"200"==e.code)return t.$Message.success(e.msg),t.$Modal.remove(),!0;t.$Message.error(e.msg),t.loading=!1}).catch(function(e){console.log(e),t.loading=!1});break;default:t.$Message.error("form_method不存在"),t.loading=!1;break}},cancel:function(){this.$refs[this.ref].resetFields()}},watch:{api:function(){this.loadData()}}},_=p,v=(a("9d12"),Object(u["a"])(_,o,i,!1,null,null,null));v.options.__file="va_dyform.vue";t["a"]=v.exports}}]);