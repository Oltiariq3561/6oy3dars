import React, { useState } from 'react';
function App() {
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [dataList, setDataList] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age) {
      setDataList([...dataList, formData]);
      setFormData({ name: '', age: '' });
    }
  };
  return (
    <div>
      <center><form style={{display:'block',width:'300px',height:'300px', border:'1px solid grey', borderRadius:'5px',}}  onSubmit={handleSubmit}>
        <input style={{display:'block',width: '200px', height: '40px', border:'1px solid grey', borderRadius:'5px', marginTop:'25px'}}
          type="text"
          name="name"
          placeholder="Ism"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input style={{display:'block',width: '200px', height: '40px', border:'1px solid grey', borderRadius:'5px',marginTop:'25px'}}
          type="number"
          name="age"
          placeholder="Yosh"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ display:'block',width: '100px', height: '40px', border:'0%', borderRadius:'20px',marginTop:'50px'  }} >Qo'shish</button>
      </form></center>

      <div className='cards' style={{display:'flex', justifyContent:'center', gap: '20px', flexWrap:'wrap'}}>
        {dataList.map((data, index) => (
          <div style={{border:'1px solid', borderRadius:'4px', fontFamily:'sans-serif', marginTop:'30px', width:'250px'}} className='card' key={index} >
            <h3>Ism: {data.name}</h3>
            <p>Yosh: {data.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
