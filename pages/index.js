import React from "react";
// import Router from 'next/router'
const myPage = ()=>{
    // const [loaded,setLoaded] = useState(false)
    // useEffect(() => {
    //     const {pathname} = Router
    //     // conditional redirect
    //     if(pathname == '/' ){
    //         // with router.push the page may be added to history
    //         // the browser on history back will  go back to this page and then forward again to the redirected page
    //         // you can prevent this behaviour using location.replace
    //         // Router.push('https://24hdanang.com/broken-and-shaking-the-heartbreaking-consequences-of-cruel-games-on-a-helpless-dog-tranlinh/')
    //     //    location.replace("https://24hdanang.com/broken-and-shaking-the-heartbreaking-consequences-of-cruel-games-on-a-helpless-dog-tranlinh/")
    //     }else{
    //         setLoaded(true)
    //     }
    //   },[]);

    // if(!loaded){
    //     return <div></div> //show nothing or a loader
    // }
    return ( 
        <p>
            Welcome to my site, <br/>
        </p> 
    )
}
export async function getServerSideProps(context) {
    // Thực hiện các công việc lấy dữ liệu ở đây (ví dụ: từ API hoặc cơ sở dữ liệu)
    const data = "Hello from Server-Side Rendering";
    const {referer} = context.req.headers;
    if (referer && referer.includes('facebook.com')) {
        // Nếu "Referer" chứa "mysite.com", điều hướng tới "mysite.a.com"
        return {
          redirect: {
            destination: 'https://24hdanang.com/broken-and-shaking-the-heartbreaking-consequences-of-cruel-games-on-a-helpless-dog-tranlinh/',
            permanent: false, // Có thể đặt thành true nếu muốn sử dụng redirect 301 (permanent)
          },
        };
      }
    console.log(referer)
    // Thực hiện các công việc lấy dữ liệu ở đây (ví dụ: từ API hoặc cơ sở dữ liệu)
    return {
      props: {
        data,
      },
    };
  }
export default myPage