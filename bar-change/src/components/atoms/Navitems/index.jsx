const NavItems=({path,name})=>{
    return(
        <div>
        <li class="nav-item">
        <a class="nav-link " aria-current="page"  href={path}>{name}</a>
    </li>
    </div>
    );
};
export default NavItems;