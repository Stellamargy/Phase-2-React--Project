function Header({title}){

  return(
      <>
          <h1 style={{color:'blue'}}>{title}</h1>
    
       </>

  );
}
Header.defaultProps={
  title:"Default Title"
}
export default Header;
