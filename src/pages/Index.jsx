import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Snippet Manager</h1>
      <p className="text-xl mb-8">
        Create, manage, and transform your code snippets into reusable templates.
      </p>
      <Button onClick={() => navigate("/snippets")} size="lg">
        Get Started
      </Button>
    </div>
  );
};

export default Index;