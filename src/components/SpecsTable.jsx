import React from 'react';
import { motion } from 'framer-motion';

const specs = [
  { 
    id: 'dimensions',
    category: "Dimensions", 
    items: [
      { id: 'length', name: "Overall Length", value: "110 cm", note: "With footrest" },
      { id: 'width', name: "Overall Width", value: "70 cm", note: "At widest point" },
      { id: 'height', name: "Overall Height", value: "95 cm", note: "From ground to headrest" },
      { id: 'seat-width', name: "Seat Width", value: "45 cm", note: "Adjustable ±5 cm" },
      { id: 'seat-depth', name: "Seat Depth", value: "50 cm", note: "Adjustable ±5 cm" },
      { id: 'seat-height', name: "Seat Height", value: "55 cm", note: "From ground to seat" },
      { id: 'weight-cap', name: "Weight Capacity", value: "120 kg", note: "Maximum user weight" },
    ]
  },
];

const SpecsTable = () => {
  return (
    <section id="specs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-blue-900"
        >
          TECHNICAL SPECIFICATIONS
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto shadow-lg rounded-lg"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-4 text-left w-1/3">Category</th>
                <th className="p-4 text-left">Specification</th>
                <th className="p-4 text-left">Value</th>
                <th className="p-4 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((category) => (
                <React.Fragment key={category.id}>
                  {category.items.map((item) => (
                    <tr 
                      key={item.id}
                      className={`border-b border-gray-200 ${category.items.indexOf(item) % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      {category.items.indexOf(item) === 0 && (
                        <td 
                          rowSpan={category.items.length}
                          className="p-4 border-r border-gray-200 font-semibold align-top bg-gray-100"
                        >
                          {category.category}
                        </td>
                      )}
                      <td className="p-4">{item.name}</td>
                      <td className="p-4 font-medium">{item.value}</td>
                      <td className="p-4 text-gray-600">{item.note}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default SpecsTable;