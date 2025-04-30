const LayoutDemo = () => {
    return (
      <div className="space-y-8">
  
        {/* Flexbox Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Flexbox Layout</h3>
          <div className="flex space-x-4">
            <div className="bg-green-200 p-4 rounded">Item 1</div>
            <div className="bg-green-200 p-4 rounded">Item 2</div>
            <div className="bg-green-200 p-4 rounded">Item 3</div>
          </div>
        </div>
  
        {/* Grid Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Grid Layout</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-200 p-4 rounded">Item A</div>
            <div className="bg-purple-200 p-4 rounded">Item B</div>
            <div className="bg-purple-200 p-4 rounded">Item C</div>
            <div className="bg-purple-200 p-4 rounded">Item D</div>
          </div>
        </div>
  
      </div>
    );
  };
  
  export default LayoutDemo;
  