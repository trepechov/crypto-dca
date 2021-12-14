// reactstrap components
import { Container } from 'reactstrap';
// core components
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import AdminFooter from 'components/Footers/AdminFooter.js';

function FullWidth(props) {
  return (
    <>
      <div className="main-content">
        <AdminNavbar {...props} brandText="Crypto DCA" />
        {props.children}
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
}

export default FullWidth;
