import { logout } from '../../service/AuthService';
import AppButton from '../atoms/AppButton';

function Header() {
  return (
    <div style={{ padding: '20px' }}>
      <AppButton
        onClick={() => {
          logout();
          window.location.reload();
        }}
      >
        Logout
      </AppButton>
    </div>
  );
}

export default Header;