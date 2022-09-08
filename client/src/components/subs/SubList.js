import SubShow from './SubShow';

const SubList = ({ subs, deleteSub }) => (
  <>
    { subs.map( s => 
      <SubShow
        key={s.id} 
        {...s} // spread out the content of key and values of what the sub have 
        // id={s.id} title={s.title} created_at...
        deleteSub={deleteSub}
      />
    )}
  </>
)

export default SubList;