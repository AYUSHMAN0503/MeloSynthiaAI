
import FileUpload from './FileUpload';

function UploadForm(): JSX.Element {
  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Mint NFT</h1>
      <FileUpload></FileUpload>
    </div>
  );
}

export default UploadForm;