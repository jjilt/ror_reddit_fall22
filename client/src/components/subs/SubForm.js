import { useState } from 'react';

const SubForm = ({ addSub }) => {
                              //  fields the obj has
  const [sub, setSub] = useState({ title: '' })

  const handleSubmit = (e) => {
    // not do a full page reload, and lose data and post in the url
    e.preventDefault()
    addSub(sub)
    // clear out the form 
    setSub({ title: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {/* 1 input for each attr */}
        <input 
          // main 3 things is name value and on change
          name='title'
          value={sub.title}
          onChange={(e) => setSub({ ...sub, title: e.target.value })}

          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SubForm;