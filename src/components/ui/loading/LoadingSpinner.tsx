export default function LoadingSpinner() {
    return (
        <div className="w-full h-96 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin-slow"></div>
        </div>
    );
}