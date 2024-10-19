import { Spinner } from "react-bootstrap";

export function SpinnerComponent() {
  return (
    <div className="w-full flex justify-center p-8">
      <Spinner animation="border" role="status" />
    </div>
  );
}
export default SpinnerComponent;
