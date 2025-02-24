import { Button } from "./ui/button";
import { Card } from "./ui/card";

function ToolBar() {
  return (
    <Card className="flex justify-center items-center space-x-4 border-b-4 border-gray-500 rounded-t-full p-4 w-full bg-white shadow-md">
      <Button className="px-4 py-2 bg-blue-500 text-white rounded">
        Letter1
      </Button>
      <Button className="px-4 py-2 bg-green-500 text-white rounded">
        Letter2
      </Button>
    </Card>
  );
}
export { ToolBar };
