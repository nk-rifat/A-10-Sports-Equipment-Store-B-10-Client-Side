const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
            <p className="text-xl text-gray-700 mt-4">Sorry, the page you are looking for does not exist.</p>
            <a
                href="/"
                className="mt-6 text-blue-500 hover:underline"
            >
                Go back to Home
            </a>
        </div>
    );
};

export default Error;