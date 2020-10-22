import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { wrapper} from '../store';
import { searchData } from '../screens/Home/data/actions';

// export const getStaticProps = wrapper.getStaticProps(
//   ({ store, preview }) => {
//     console.log('2. Page.getStaticProps uses the store to dispatch things');
//     store.dispatch({ type: 'TICK', payload: 'was set in other page 1111 ' + preview });
//     return { props: {test: 'dffdf' } }
//   }
// );

// you can also use `connect()` instead of hooks
const Page = () => {
  const { home } = useSelector<any, any>(state => state);
  const dispatch = useDispatch();
  return (
    <div>{home.isLoading ? 'yes': 'no'}
    <span> r10</span>
    <button onClick={() => { dispatch(searchData('hihi')) }}> click</button>
    </div>
  );
};

export default Page;