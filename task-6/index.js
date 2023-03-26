const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  if(ctx.path === "/"){
    ctx.type = "text/html"
    ctx.body = '<h1>Index sayfasi</h1>';
  }
  else if(ctx.path === "/about"){
    ctx.type = "text/html"
    ctx.body = '<h1>About sayfasi</h1>';
  }
  else if(ctx.path === "/contact"){
    ctx.type = "text/html"
    ctx.body = '<h1>Contact sayfasi</h1>';
  }
  else {
    ctx.type = "text/html"
    ctx.body = '<h1>404</h1>';
  }

});

const port = 3000
app.listen(port, ()=>{
  console.log(`Server started on port: ${port}`)
});