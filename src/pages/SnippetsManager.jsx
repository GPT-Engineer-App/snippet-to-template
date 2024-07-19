import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SnippetsManager = () => {
  const [snippets, setSnippets] = useState([]);
  const [selectedSnippet, setSelectedSnippet] = useState(null);
  const [newSnippetTitle, setNewSnippetTitle] = useState("");

  const addNewSnippet = () => {
    if (newSnippetTitle.trim() === "") return;
    const newSnippet = {
      id: Date.now(),
      title: newSnippetTitle,
      content: "",
      metadata: "{}",
    };
    setSnippets([...snippets, newSnippet]);
    setNewSnippetTitle("");
  };

  const updateSnippet = (updatedSnippet) => {
    setSnippets(
      snippets.map((s) => (s.id === updatedSnippet.id ? updatedSnippet : s))
    );
    setSelectedSnippet(updatedSnippet);
  };

  return (
    <div className="flex h-full">
      <div className="w-1/3 p-4 border-r">
        <h2 className="text-2xl font-bold mb-4">Snippets</h2>
        <div className="flex mb-4">
          <Input
            value={newSnippetTitle}
            onChange={(e) => setNewSnippetTitle(e.target.value)}
            placeholder="New snippet title"
            className="mr-2"
          />
          <Button onClick={addNewSnippet}>Add</Button>
        </div>
        <div className="space-y-2">
          {snippets.map((snippet) => (
            <Card
              key={snippet.id}
              className="cursor-pointer"
              onClick={() => setSelectedSnippet(snippet)}
            >
              <CardHeader>
                <CardTitle>{snippet.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-2/3 p-4">
        {selectedSnippet ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedSnippet.title}</h2>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Content</label>
              <Textarea
                value={selectedSnippet.content}
                onChange={(e) =>
                  updateSnippet({ ...selectedSnippet, content: e.target.value })
                }
                rows={10}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Metadata</label>
              <Textarea
                value={selectedSnippet.metadata}
                onChange={(e) =>
                  updateSnippet({ ...selectedSnippet, metadata: e.target.value })
                }
                rows={5}
              />
            </div>
            <Button onClick={() => console.log("Save changes")}>
              Save Changes
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl text-gray-500">Select a snippet to edit</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnippetsManager;