type PageTitleProps = {
  children: React.ReactNode;
};

function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 style={{ color: 'black', textAlign: 'center', marginBottom: '20px' }}>
      {children}
    </h1>
  );
}

export default PageTitle;