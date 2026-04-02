type AppButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

function AppButton({ children, onClick, type = 'button' }: AppButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ color: 'black', padding: '10px 16px', cursor: 'pointer' }}
    >
      {children}
    </button>
  );
}

export default AppButton;