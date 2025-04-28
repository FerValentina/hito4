const Navbar = () => {
    const total = 25000;
    const token = false;
  
    const formatPrice = (num) => num.toLocaleString('es-CL');
  
    return (
      <nav className="navbar navbar-dark bg-dark py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <strong className="text-white">Pizzería Mamma Mia!</strong>
  
          <div className="d-flex gap-2">
            <button className="btn btn-light  btn-sm">🍕 Home</button>
            {token ? (
              <>
                <button className="btn btn-light btn-sm">🔓 Profile</button>
                <button className="btn btn-light btn-sm">🔒 Logout</button>
              </>
            ) : (
              <>
                <button className="btn btn-light  btn-sm">🔐 Login</button>
                <button className="btn btn-light  btn-sm">🔐 Register</button>
              </>
            )}
            <button className="btn btn-outline-info btn-sm">
              🛒 Total: ${formatPrice(total)}
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  