module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=18)}([function(e,t){e.exports=require("debug")},function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"g",function(){return s}),n.d(t,"h",function(){return u}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return a}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return f});var r=n(6),o=(n.n(r),process.env.NODE_ENV||"development"),i="development"===o,s="localhost",u=+process.env.PORT||4e3,c=i?"http://"+s+":"+u+"/":"/",a="http://localhost:"+u+"/",l=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.resolve.apply(r,[process.cwd()].concat(e))},f=require},function(e,t){e.exports=require("koa")},function(e,t,n){"use strict";var r=n(12);n.d(t,"g",function(){return r.b});var o=n(7);n.d(t,"a",function(){return o.a}),n.d(t,"b",function(){return o.b}),n.d(t,"c",function(){return o.d}),n.d(t,"h",function(){return o.f}),n.d(t,"i",function(){return o.g});var i=n(4);n.d(t,"d",function(){return i.a}),n.d(t,"f",function(){return i.b}),n.d(t,"j",function(){return i.c});var s=n(32);n.d(t,"e",function(){return s.a}),n.d(t,"k",function(){return s.b});var u=(n(34),n(35));n.d(t,"l",function(){return u.a})},function(e,t,n){"use strict";function r(e,t,n){void 0===t&&(t="");var r=i[e];switch(t){case s.BOOLEAN:return r?"false"!==r:n||!1;case s.STR_ARR:return r?r.split(","):n||[];case s.KEY_VALUE:if(!r)return n||{};var o=r.split(":");return{key:o[0],value:o[1]};case s.KEY_VALUE_ARR:return r?r.split(",").map(function(e){var t=e.split(":");return{key:t[0],value:t[1]}}):n||[];default:return r||t}}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return r});var o,i=process.env;!function(e){e.APP_KEYS="APP_KEYS",e.API_SERVER_URL="API_SERVER_URL",e.CCP_ACCOUNTSID="CCP_ACCOUNTSID",e.CCP_ACCOUNTTOKEN="CCP_ACCOUNTTOKEN",e.CCP_APPID="CCP_APPID",e.CCP_TEMPLATEID="CCP_TEMPLATEID",e.CCP_SERVERIP="CCP_SERVERIP",e.CCP_SERVERPORT="CCP_SERVERPORT",e.CCP_SOFTVERSION="CCP_SOFTVERSION",e.ENABLE_DEV_STATIC="ENABLE_DEV_STATIC",e.NON_SSR_PATTERN="NON_SSR_PATTERN",e.SMS_BASE_URL="SMS_BASE_URL",e.STATIC_PATTERN="STATIC_PATTERN"}(o||(o={}));var s;!function(e){e[e.BOOLEAN=0]="BOOLEAN",e[e.STR_ARR=1]="STR_ARR",e[e.KEY_VALUE=2]="KEY_VALUE",e[e.KEY_VALUE_ARR=3]="KEY_VALUE_ARR"}(s||(s={}))},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return s}),n.d(t,"g",function(){return u}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return a});var r="/api",o=new RegExp("^("+r+")/"),i="Accept-Language",s="CAPTCHA_SESSION",u="VERIFICATION_CODE_COOKIE",c="rubick",a="token"},function(e,t){e.exports=require("crypto")},function(e,t,n){"use strict";var r=n(53);n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return r.b}),n.d(t,"c",function(){return r.c}),n.d(t,"d",function(){return r.d})},function(e,t){e.exports=require("koa-compose")},function(e,t){e.exports=require("koa-session")},function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var r=n(4),o={ACCOUNT_SID:Object(r.c)(r.a.CCP_ACCOUNTSID),ACCOUNT_TOKEN:Object(r.c)(r.a.CCP_ACCOUNTTOKEN),APP_ID:Object(r.c)(r.a.CCP_APPID),TEMPLATE_ID:Object(r.c)(r.a.CCP_TEMPLATEID),SERVER_IP:Object(r.c)(r.a.CCP_SERVERIP),SERVER_PORT:Object(r.c)(r.a.CCP_SERVERPORT),SOFT_VERSION:Object(r.c)(r.a.CCP_SOFTVERSION)},i={}},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";var r=n(15);n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return r.b});var o=(n(48),n(49));n.d(t,"c",function(){return o.a})},function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var r="LOCALE_COOKIE",o="Fri, 31 Dec 9999 23:59:59 GMT"},function(e,t){e.exports=require("webpack-merge")},function(e,t,n){"use strict";var r=n(67),o=(n.n(r),n(68)),i=(n.n(o),n(69)),s=(n.n(i),n(5)),u=(n.n(s),n(1)),c=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=!u.b,l=u.b,f=r.extract({use:[{loader:"css-loader",options:{minimize:a&&{discardComments:{removeAll:!0}},sourceMap:l}},{loader:"postcss-loader",options:{sourceMap:l}},{loader:"resolve-url-loader",options:{sourceMap:l}},{loader:"sass-loader",options:{sourceMap:!0}},{loader:"sass-resources-loader",options:{resources:Object(u.e)("src/styles/_variables.scss")}}],fallback:"vue-style-loader"}),p={resolve:{alias:{lodash$:"lodash-es"},modules:[Object(u.e)("src"),Object(u.e)("server/router"),"node_modules"],extensions:[".ts",".vue",".js"]},output:{path:Object(u.e)("dist/static"),publicPath:u.d,filename:"[name].["+(u.b?"hash":"chunkhash")+"].js"},devtool:!!u.b&&"cheap-module-eval-source-map",module:{rules:[{test:/\.ts$/,loader:"ts-loader",options:{appendTsSuffixTo:[/\.vue$/],compilerOptions:{module:"esnext",target:"es5"},transpileOnly:!0}},{test:/\.vue$/,loader:"vue-loader",options:{cssModules:{camelCase:!0,localIdentName:u.b?"[name]__[local]___[hash:base64:5]":"[hash:base64]"},loaders:{scss:f}}},{test:/\.scss$/,use:f},{test:/\.(eot|svg|ttf|woff2?)$/,loader:"url-loader",options:{limit:8192}},{test:/\.pug$/,use:[{loader:"html-loader",options:{minimize:a}},"apply-loader","pug-loader"]}]},plugins:[new s.DefinePlugin(c({},Object.entries(process.env).reduce(function(e,t){var n=t[0],r=t[1];return"VUE_ENV"!==n&&(e["process.env."+n]=JSON.stringify(r)),e},{}),{__DEV__:u.b,API_PREFIX:JSON.stringify("/api"),NON_INDEX_REGEX:/^(?!.*[\/\\](index)\.ts).*\.(ts|vue)$/.toString(),I18N_REGEX:/([\w-]*[\w]+)\.i18n\.json$/.toString()})),new s.SourceMapDevToolPlugin({test:/\.(css|js|ts)$/}),new r({filename:"app.[chunkhash].css",disable:u.b}),new o({tsconfig:Object(u.e)("src/tsconfig.json"),tslint:!0,vue:!0})].concat(u.b?[new s.NoEmitOnErrorsPlugin,new i]:[new s.optimize.ModuleConcatenationPlugin])};t.a=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),o=(n.n(r),n(6)),i=(n.n(o),n(20)),s=n.n(i),u=n(0),c=(n.n(u),n(2)),a=(n.n(c),n(21)),l=(n.n(a),n(10)),f=(n.n(l),n(22)),p=(n.n(f),n(23)),d=(n.n(p),n(11)),h=(n.n(d),n(24)),b=(n.n(h),n(25)),v=(n.n(b),n(26)),y=(n.n(v),n(27)),g=(n.n(y),n(28)),m=(n.n(g),n(29)),_=(n.n(m),n(30)),E=(n.n(_),n(31)),O=(n.n(E),n(3)),w=n(37),R=n(14),x=n(1),S=n(50),P=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},C=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}c((r=r.apply(e,t||[])).next())})},T=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,u,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},A=this;s.a.languages([w.Locale.ZH,w.Locale.EN]);var j=u("rubick:server"),k="development"===process.env.NODE_ENV?n(59).renderFile(Object(x.e)("server/template.pug"),{pretty:!0}):r.readFileSync(Object(x.e)("dist/template.html"),"utf-8"),N=new c;N.keys=Object(O.j)(O.d.APP_KEYS,O.f.STR_ARR),N.use(l([p(),f(),d(O.g,N)])),"development"===process.env.NODE_ENV?N.use(a(x.g,{port:x.h+1,preserveReqSession:!0,filter:function(e){return e.url.startsWith("/api")}})):Object(S.a)(N);var I,D,L,q=function(e,t){return Object(m.createBundleRenderer)(e,P({},t,{template:k,inject:!1,cache:v({max:1e3,maxAge:9e5}),basedir:Object(x.e)("dist/static"),runInNewContext:!1}))};if("development"===process.env.NODE_ENV){var V=n(60).default(function(e){var t=e.bundle,n=e.clientManifest,r=e.fs;I=q(t,{clientManifest:n}),L=r}),M=V.readyPromise,U=V.webpackMiddleware;D=M,N.use(U)}else{L=r,I=q(Object(x.f)(Object(x.e)("dist/vue-ssr-server-bundle.json")),{clientManifest:Object(x.f)(Object(x.e)("dist/vue-ssr-client-manifest.json"))});var F={};N.use(h("dist/static",{defer:!0})).use(b("dist/static",{maxAge:31536e3},F)),F["/service-worker.js"].maxAge=0}var Y=_.version,B=E.version,K={"Content-Type":"text/html",Server:"koa/"+Y+"; vue-server-renderer/"+B},$=Object(O.j)(O.d.NON_SSR_PATTERN,O.f.STR_ARR),H=Object(O.j)(O.d.STATIC_PATTERN,O.f.STR_ARR);N.use(function(e,t){return C(A,void 0,void 0,function(){var n,r,i,u,c,a,l,f,p,d,h,b,v;return T(this,function(m){switch(m.label){case 0:return"GET"!==e.method||null!=e.body||404!==e.status||/(^\/api\/)|(\.[a-z]{2,4}\d?$)/.test(e.path)?[2]:[4,D];case 1:return m.sent(),(n=e.cookies.get(R.b),r=n||s.a.get(e.get(O.a)),n||e.cookies.set(R.b,r,{httpOnly:!1,path:"/",expires:new Date(R.a)}),e.set(K),i=e.url,$.find(function(e){return!!g(e).exec(i)}))?"development"!==process.env.NODE_ENV?[3,2]:(e.body=L.createReadStream(Object(x.e)("dist/__non-ssr-page__.html")),[3,4]):[3,5];case 2:return e.url="__non-ssr-page__.html",[4,t()];case 3:m.sent(),m.label=4;case 4:return[2];case 5:return"development"===process.env.NODE_ENV&&!Object(O.j)(O.d.ENABLE_DEV_STATIC,O.f.BOOLEAN)||!H.find(function(e){return!!g(e).exec(i)})?[3,10]:(a=i.split("?")[0].replace(/^\//,"")||"home",l=a+"."+r+".html",f=e.hostname.endsWith(".now.sh"),c=f?o.resolve("/tmp",l):Object(x.e)("dist/static/"+l),L.existsSync(c)?"development"===process.env.NODE_ENV||f?(e.body=L.createReadStream(c),[3,8]):[3,6]:[3,9]);case 6:return e.url=l,[4,t()];case 7:m.sent(),m.label=8;case 8:return j('using static html file "'+c+'"'),[2];case 9:u=!0,m.label=10;case 10:return p=Date.now(),d={ctx:e,locale:r},h="",e.respond=!1,e.status=200,b=e.res,v=I.renderToStream(d).on("error",function(t){switch(e.status=t.status||500){case 302:return e.set({Location:t.url}),b.end();case 401:return e.redirect("/login?next="+i),b.end();case 404:return b.end("404 | Page Not Found");default:b.end("500 | Internal Server Error"),console.error("error during render : "+i),console.error(t.stack)}}).on("end",function(){if(h)try{y.sync(o.dirname(c),{fs:L}),L.writeFileSync(c,h),j('static html file "'+c+'" is generated')}catch(e){console.error(e)}j("whole request: "+(Date.now()-p)+"ms")}),u&&v.on("data",function(e){return h+=e}),v.pipe(b),[2]}})})}),N.listen(x.h,x.g,function(){return j("Server is now running at %s:%s.",x.g,x.h)})},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("accept-language")},function(e,t){e.exports=require("koa-better-http-proxy")},function(e,t){e.exports=require("koa-compress")},function(e,t){e.exports=require("koa-logger")},function(e,t){e.exports=require("koa-static")},function(e,t){e.exports=require("koa-static-cache")},function(e,t){e.exports=require("lru-cache")},function(e,t){e.exports=require("mkdirp")},function(e,t){e.exports=require("path-to-regexp")},function(e,t){e.exports=require("vue-server-renderer")},function(e,t){e.exports=require("koa/package.json")},function(e,t){e.exports=require("vue/package.json")},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return b});var r,o=n(13),i=n.n(o),s=n(0),u=(n.n(s),n(33)),c=(n.n(u),n(7)),a=n(4),l=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},f=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}c((r=r.apply(e,t||[])).next())})},p=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,u,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},d=this;!function(e){e.DELETE="delete",e.GET="get",e.HEAD="head",e.PATCH="patch",e.POST="post",e.PUT="put"}(r||(r={}));var h=s("rubick:jakiro"),b=function(e){var t=e.ctx,n=e.url,r=void 0===n?t.url:n,o=e.method,s=void 0===o?t.method:o,b=e.data,v=void 0===b?t.request.body:b,y=e.headers,g=e.params,m=void 0===g?t.query:g,_=e.qs;return f(d,void 0,void 0,function(){var e,n,o,f,d,b;return p(this,function(p){switch(p.label){case 0:r=r.replace(c.c,"/"),r=Object(a.c)(a.a.API_SERVER_URL)+(/^\/v[12]/.test(r)?r:"/v1"+r),_&&(v=u.stringify(v)),e=t.session.user,y=l({},y,{"Alauda-Request-ID":t.get("alauda-request-id"),"User-Agent":"rubick/v1.0"}),e&&(y.Authorization="Token "+e.token),p.label=1;case 1:return p.trys.push([1,3,,4]),[4,i.a.request({url:r,method:s,data:v,params:m,headers:y})];case 2:return n=p.sent(),[3,4];case 3:return o=p.sent(),n={data:o.response.data,error:o.message,status:o.response.status},[3,4];case 4:if(f=n.data,d=f||{},b=n.status,!(b>=400)||f&&f.errors||(d={code:"malformed_jakiro_response",source:"1019",error:n.error}),h("\nurl:%s\nresult: %O\nstatus:%d",r,d,b),d.errors&&(d.error=d.errors[0],d.code=d.error.code,delete d.errors),d.error)throw{result:d,status:b};return[2,{result:d,status:b}]}})})}},function(e,t){e.exports=require("qs")},function(e,t,n){"use strict";var r=n(8);n.n(r),n(7)},function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(13),o=n.n(r),i=n(8),s=(n.n(i),n(36)),u=(n.n(s),n(12)),c=n(4),a=u.a.ACCOUNT_SID,l=Object(c.c)(c.a.SMS_BASE_URL),f=function(){return{Accept:"application/json","Content-Type":"application/json;charset=utf-8",Authorization:new Buffer(a+":"+s().format("YYYYMMDDHHmmss")).toString("base64")}},p=function(){return i.createHash("md5").update(""+a+u.a.ACCOUNT_TOKEN+s().format("YYYYMMDDHHmmss")).digest("hex")},d=function(){return l+"/2013-12-26/Accounts/"+a+"/SMS/TemplateSMS?sig="+p().toUpperCase()},h=function(e,t){return o.a.post(d(),{to:e,appId:u.a.APP_ID,templateId:u.a.TEMPLATE_ID,datas:[t,"60"]},{headers:f()})}},function(e,t){e.exports=require("moment")},function(e,t,n){"use strict";var r=n(38);n.n(r);n.o(r,"Locale")&&n.d(t,"Locale",function(){return r.Locale});var o=n(39);n.n(o);n.o(o,"Locale")&&n.d(t,"Locale",function(){return o.Locale});var i=(n(40),n(41));n.n(i);n.o(i,"Locale")&&n.d(t,"Locale",function(){return i.Locale});var s=n(42);n.d(t,"Locale",function(){return s.a});var u=n(43),c=(n.n(u),n(44));n.n(c),n(45)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r;!function(e){e.DASHBOARD="dashboard",e.CONTAINER="cubes",e.MIRROR="rocket",e.DOCS="file",e.LOCALE="globe"}(r||(r={}));var o;!function(e){e.DASHBOARD="dashboard",e.CONTAINER="container",e.APPLICATION="application",e.SERVICE="service",e.TEMPLATE="template",e.ENVFILE="envfile",e.CONFIGURATION="configuration",e.MIRROR="mirror",e.DOCS="docs",e.LOCALE="locale"}(o||(o={}));var i;!function(e){e.BOARD="board",e.DELIVERY="delivery",e.INFRASTRUCTURE="infrastructure",e.OPS="ops",e.APP_PLATFORM="app-platform",e.PLATFORM_EXTENSION="platform-extension",e.OTHERS="others"}(i||(i={}))},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r;!function(e){e.EN="en",e.ZH="zh"}(r||(r={}))},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r=n(46),o=(n.n(r),n(47));n.n(o)},function(e,t){},function(e,t){},function(e,t,n){"use strict";n(15)},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return parseInt(e+"",10)}},function(e,t,n){"use strict";var r=n(0),o=(n.n(r),n(2)),i=(n.n(o),n(51)),s=(n.n(i),n(10)),u=(n.n(s),n(52)),c=(n.n(u),n(11)),a=(n.n(c),n(1)),l=n(3),f=n(9),p=(n(54),this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}c((r=r.apply(e,t||[])).next())})}),d=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,u,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},h=this,b=r("rubick:server"),v=new u({prefix:l.b});Object(f.d)(v),t.a=function(e){var t=!!e,n=[i(),v.routes(),v.allowedMethods(),function(e,t){return p(h,void 0,void 0,function(){var n,r,n,o;return d(this,function(i){switch(i.label){case 0:if(e.matched.length||!/^\/api/.test(e.url)||/\.[a-z]{2-4}\d?$/.test(e.path))return[3,4];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,Object(l.k)({ctx:e})];case 2:return n=i.sent().result,e.body=n,[3,4];case 3:return r=i.sent(),n=r.result,o=r.status,e.body=n,e.status=o,[3,4];case 4:return[4,t()];case 5:return i.sent(),[2]}})})}];e||(e=new o,e.keys=Object(l.j)(l.d.APP_KEYS,l.f.STR_ARR),n.unshift(c(l.g,e))),e.use(s(n)),t||e.listen(a.h+1,a.g,function(){b("Router server is now running at %s:%s.",a.g,a.h+1)})}},function(e,t){e.exports=require("koa-bodyparser")},function(e,t){e.exports=require("koa-router")},function(e,t,n){"use strict";function r(e,t){"string"==typeof e||e instanceof RegExp?e={method:t,path:e}:void 0!==t&&console.warn("method should not be passed in");var n=e||{},r=n.method,o=Array.isArray(r)?r:[r],i=n.path;return function(e,t,n){e=t?e:e.prototype,e[s]||(e[s]=[]);var u=e[s];t?u.push({handler:n.value,method:o,path:i}):(r&&u.forEach(function(e){return e.method=e.method[0]?e.method:o}),u.path=i)}}n.d(t,"b",function(){return o}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return r});var o,i=[];!function(e){e.ALL="all",e.DELETE="delete",e.GET="get",e.HEAD="head",e.OPTIONS="options",e.PATCH="patch",e.POST="post",e.PUT="put"}(o||(o={}));var s=Symbol("routes"),u=function(e){for(;i.length;)!function(){var t=i.shift();if(!t)return"continue";t.forEach(function(n){var r=n.handler,i=n.method,s=n.path,u=void 0===s?"":s;t.path&&"string"==typeof u&&(u=t.path+u),r=Array.isArray(r)?r:[r],i.forEach(function(t){return(n=e)[t||o.GET].apply(n,[u].concat(r));var n})})}()},c=function(e){i.push(e.prototype[s])}},function(e,t,n){"use strict";n(55),n(56)},function(e,t,n){"use strict";var r=n(2),o=(n.n(r),n(9)),i=n(3),s=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}c((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,u,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u};!function(){function e(){}return e.prototype.commonCheck=function(e){return c(this,void 0,void 0,function(){var t,n,r,o,s,u,c,l,f;return a(this,function(a){switch(a.label){case 0:t=e.session.user,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all([Object(i.k)({ctx:e,url:"/auth/profile"}),Object(i.k)({ctx:e,url:"/regions/"+t.namespace})])];case 2:return o=a.sent(),s=o[0].result,u=o[1].result,n=s,r=u,[3,4];case 3:return c=a.sent(),l=c.result,f=c.status,e.session=null,e.body=l,e.status=f,[2];case 4:return e.body={profile:n,regions:r},[2]}})})},e.prototype.logout=function(e){e.session=null,e.body=null},s([Object(o.c)("/common"),u("design:type",Function),u("design:paramtypes",["function"==typeof(t=void 0!==r.Context&&r.Context)&&t||Object]),u("design:returntype",Promise)],e.prototype,"commonCheck",null),s([Object(o.c)("/logout"),u("design:type",Function),u("design:paramtypes",["function"==typeof(n=void 0!==r.Context&&r.Context)&&n||Object]),u("design:returntype",void 0)],e.prototype,"logout",null),e=s([o.a],e);var t,n}()},function(e,t,n){"use strict";var r=n(57),o=(n.n(r),n(8)),i=(n.n(o),n(2)),s=(n.n(i),n(58)),u=(n.n(s),n(9)),c=n(3),a=n(14),l=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}c((r=r.apply(e,t||[])).next())})},d=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,u,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},h=function(){return Object(a.c)(9e3*Math.random()+1e3)+""},b=function(e){return new r(80,30,e).getBuffer()};!function(){function e(){}return e.prototype.loginCheck=function(e){return p(this,void 0,void 0,function(){return d(this,function(t){return e.body=Object(s.omit)(e.session.user,c.h),[2]})})},e.prototype.login=function(e){return p(this,void 0,void 0,function(){var t,n,r,o,i,o,u,a,l;return d(this,function(f){switch(f.label){case 0:t=e.request,n=t.body,f.label=1;case 1:return f.trys.push([1,3,,4]),[4,Object(c.k)({ctx:e,url:"/generate-api-token",headers:{CLIENT:e.ips.length?e.ips.join(", "):e.ip}})];case 2:return o=f.sent().result,r=o,[3,4];case 3:return i=f.sent(),o=i.result,u=i.status,e.body=o,e.status=u,[2];case 4:return e.user=e.session.user=r,[4,Object(c.k)({ctx:e,url:"/auth/"+(n.organization||n.username)+"/profile",method:c.e.GET})];case 5:return a=f.sent().result,a.password_is_empty?l="/user/password":n.next&&(l=n.next),e.body={url:l||"/",user:Object(s.omit)(r,c.h)},[2]}})})},e.prototype.getCaptcha=function(e){var t=h();e.session[c.c]=t,e.type="image/png",e.body=b(t)},e.prototype.sendSms=function(e){return p(this,void 0,void 0,function(){var t,n,r;return d(this,function(i){switch(i.label){case 0:return(t=e.session[c.c])!==e.request.body.captcha?(e.body={errors:[{code:"invalid_captcha"}]},e.status=401,[2]):(n=h(),r=e.request.body.mobile,[4,Object(c.l)(r,n)]);case 1:return i.sent(),e.cookies.set(c.i,o.createHash("md5").update(r+n).digest("hex"),{maxAge:36e5}),[2]}})})},l([Object(u.c)("/login"),f("design:type",Function),f("design:paramtypes",["function"==typeof(t=void 0!==i.Context&&i.Context)&&t||Object]),f("design:returntype",Promise)],e.prototype,"loginCheck",null),l([Object(u.c)("/login",u.b.POST),f("design:type",Function),f("design:paramtypes",["function"==typeof(n=void 0!==i.Context&&i.Context)&&n||Object]),f("design:returntype",Promise)],e.prototype,"login",null),l([Object(u.c)("/captcha"),f("design:type",Function),f("design:paramtypes",["function"==typeof(r=void 0!==i.Context&&i.Context)&&r||Object]),f("design:returntype",void 0)],e.prototype,"getCaptcha",null),l([Object(u.c)("/sms",u.b.POST),f("design:type",Function),f("design:paramtypes",["function"==typeof(a=void 0!==i.Context&&i.Context)&&a||Object]),f("design:returntype",Promise)],e.prototype,"sendSms",null),e=l([u.a],e);var t,n,r,a}()},function(e,t){e.exports=require("captchapng2")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("pug")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=(n.n(r),n(61)),i=(n.n(o),n(62)),s=(n.n(i),n(5)),u=(n.n(s),n(1)),c=n(63),a=n(70),l=r("rubick:server:dev");t.default=function(e){var t,n,r,f,p=new Promise(function(e){t=e}),d=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t(),e.apply(void 0,n)},h=s(c.a),b=o({compiler:h});h.plugin("done",function(e){e=e.toJson(),e.errors.forEach(l),e.warnings.forEach(l),e.errors.length||(f=b.dev.fileSystem,n=JSON.parse(f.readFileSync(Object(u.e)("dist/vue-ssr-client-manifest.json"))),r&&d({bundle:r,clientManifest:n,fs:f}))});var v=new i,y=s(a.a);return y.outputFileSystem=v,y.watch({},function(e,t){if(e)throw e;t=t.toJson(),t.errors.length||(r=JSON.parse(v.readFileSync(Object(u.e)("dist/vue-ssr-server-bundle.json"))),n&&d({bundle:r,clientManifest:n,fs:f}))}),{readyPromise:p,webpackMiddleware:b}}},function(e,t){e.exports=require("koa-webpack")},function(e,t){e.exports=require("memory-fs")},function(e,t,n){"use strict";var r=n(0),o=(n.n(r),n(64)),i=(n.n(o),n(65)),s=(n.n(i),n(66)),u=(n.n(s),n(5)),c=(n.n(u),n(16)),a=(n.n(c),n(1)),l=n(17),f=r("rubick:webpack:client");f("create webpack configuration for NODE_ENV:"+a.a+", VUE_ENV:client");var p=c.smart(l.a,{entry:{app:[Object(a.e)("src/entry-client.ts")]},target:"web",plugins:[new u.DefinePlugin({"process.env.VUE_ENV":JSON.stringify("client"),SERVER_PREFIX:JSON.stringify("/"),__SERVER__:JSON.stringify(!1)}),new u.optimize.CommonsChunkPlugin({name:"vendors",minChunks:function(e){return/node_modules/.test(e.context)&&!/\.css$/.test(e.request)}}),new u.optimize.CommonsChunkPlugin({name:"manifest"}),new o({template:"src/index.pug",filename:"__non-ssr-page__.html",favicon:"src/assets/favicon.ico"}),new s({filename:"../vue-ssr-client-manifest.json"})]});a.b||(f("Enable plugins for "+a.a+" (UglifyJS, SWPrecache)."),p.plugins.push(new u.optimize.UglifyJsPlugin({comments:!1}),new i({cacheId:"rubick",directoryIndex:!1,filename:"service-worker.js",minify:!0,dontCacheBustUrlsMatching:/./,staticFileGlobsIgnorePatterns:[/index\.html$/,/\.map$/,/\.json$/],stripPrefix:Object(a.e)("dist/static").replace(/\\/g,"/"),runtimeCaching:[{urlPattern:/\//,handler:"networkFirst"}]}))),t.a=p},function(e,t){e.exports=require("html-webpack-plugin")},function(e,t){e.exports=require("sw-precache-webpack-plugin")},function(e,t){e.exports=require("vue-server-renderer/client-plugin")},function(e,t){e.exports=require("extract-text-webpack-plugin")},function(e,t){e.exports=require("fork-ts-checker-webpack-plugin")},function(e,t){e.exports=require("friendly-errors-webpack-plugin")},function(e,t,n){"use strict";(function(e){var r=n(6),o=(n.n(r),n(0)),i=(n.n(o),n(71)),s=(n.n(i),n(5)),u=(n.n(s),n(16)),c=(n.n(u),n(72)),a=(n.n(c),n(1)),l=n(17);o("rubick:webpack:server")("create webpack configuration for NODE_ENV:"+a.a+", VUE_ENV:server"),t.a=u.smart(l.a,{entry:[r.resolve(e,"element.js"),Object(a.e)("src/entry-server.ts")],target:"node",output:{filename:"server-bundle.js",libraryTarget:"commonjs2"},plugins:[new s.DefinePlugin({"process.env.VUE_ENV":JSON.stringify("server"),SERVER_PREFIX:JSON.stringify(a.c),__SERVER__:JSON.stringify(!0)}),new i({filename:"../vue-ssr-server-bundle.json"})],externals:c({whitelist:[/\.css$/]})})}).call(t,"/")},function(e,t){e.exports=require("vue-server-renderer/server-plugin")},function(e,t){e.exports=require("webpack-node-externals")}]);