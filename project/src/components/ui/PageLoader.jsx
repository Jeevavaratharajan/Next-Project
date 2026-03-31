const PageLoader = ({ title = "Loading", subtitle = "Please wait while we prepare the page." }) => {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
      <div className="loader-ring" />
      <h3 className="mt-6 text-2xl font-semibold text-[#0f3963]">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-7 text-[#5f7389]">{subtitle}</p>
    </div>
  );
};

export default PageLoader;
