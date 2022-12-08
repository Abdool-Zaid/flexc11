let page= ()=>document.querySelector('iframe')
let router=(redirect)=>{
    localStorage.setItem('active', redirect)
    if (localStorage.active=='index'){
    page().src='products/homePage.html'
        console.log('home page')
    }else if(localStorage.active=='admin'){
        page().src='admin/admin.html'
        console.log('admin page')
    }
}
router('index');
export default router
