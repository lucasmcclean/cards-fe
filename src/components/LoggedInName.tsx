function LoggedInName()
{
    function getCurrentUserName() {
        var raw = localStorage.getItem('user_data');
        if( !raw ) return '';
        var data = JSON.parse(raw);
        return data.firstName + ' ' + data.lastName;
    }
    function doLogout(event:any) : void
    {
      event.preventDefault();
        localStorage.removeItem('user_data');
        window.location.href = '/';
    };

    return(
      <div id="loggedInDiv">
        <span id="userName">Logged In As {getCurrentUserName()} </span><br />
        <button type="button" id="logoutButton" className="buttons" 
           onClick={doLogout}> Log Out </button>
      </div>
    );
};

export default LoggedInName;
