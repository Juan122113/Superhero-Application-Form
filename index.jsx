const { useState } = React;

export const SuperheroForm = () => {

  const powerSourceOptions = [
    'Bitten by a strange creature',
    'Radioactive exposure',
    'Science experiment',
    'Alien heritage',
    'Ancient artifact discovery',
    'Other'
  ];

  const powersOptions = [
    'Super Strength',
    'Super Speed',
    'Flight',
    'Invisibility',
    'Telekinesis',
    'Other'
  ];

  const [heroName, setHeroName] = useState('');
  const [realName, setRealName] = useState('');
  const [powerSource, setPowerSource] = useState('');
  const [powers, setPowers] = useState([]);

  const handlePowersChange = (e) => {
    //console.log(e.target);
    //let value, checked, rest;
    //let value, checked;
  //const [value, checked] = [e.target.current.value, e.target.current.checked];
  //const [value, checked] = [e.target.value, e.target.checked];
  //[value, checked] = [e.target.value, e.target.checked];
  //[value, checked] = [e.target.value, e.target.checked];
  //return setPowers([{value: checked}]);
  //const [value, checked] = [e.target.value, e.target.checked];
  //return ({value, checked} = {value: e.target.value, checked: e.target.checked});

    console.log(e.target.value);
    console.log(e.target.checked);
  //return [value, checked];
  //const value = e.target.value;
  //const checked = e.target.checked; 
  //let [value, checked] = [e.target.value, e.target.checked];
  //e.target.value, e.target.checked;
  //return [e.target.value, e.target.checked];
  //const [value, checked] = [value.e.target, checked.e.target];
  //const [value, c] = [e.target, e.target];
  //const [value, checked] = e.target;
  //return [value, checked];
  //setPowers(e.target);
  //setPowers([e.target.value, e.target.checked]);
  //setPowers({value: e.target.value, checked: e.target.checked});
  //return setPowers({value: e.target.value, checked: e.target.checked});
  //return setPowers([{e.target.value: e.target.checked}]);
  //setPowers([{e.target.value: e.target.checked}]);
  //return setPowers([{value: e.target.value, checked: e.target.checked}]);
  //return setPowers([e.target.value, e.target.checked]);
  //return setPowers([e.target.value]);
  //const {value, checked} = {e.target.current.value, e.target.current.checked];
  //const {value: checked} = {e.target.value: e.target.checked};
    
    const {value, checked} = e.target;

    //const {e.target.value, e.target.checked} = e.target;
    //let {value, checked} = e.target;
    //const { {value, checked} } = e.target;
    //const ({ value, checked }) = e.target;
    //const { checked, value } = e.target;
    //let { value, checked } = e.target;
    //const [, , { value, checked }] = e.target;
    console.log(value, checked);
    console.log(e.target.value, e.target.checked);
    console.log({value, checked});
    console.log(typeof e.target);
    //return value, checked;
    //return {value, checked};
    //return ({value, checked});
    //return setPowers({value, checked});
    //setPowers({value, checked});
    //setPowers(({value, checked}));
    //return setPowers(({value, checked}));
    //setPowers({{value, checked}});
    //const {value, checked} = e.target.current;
    //const [value, checked] = e.target.current;
    //const [value, checked] = e.target;
    //const {e.target.value, e.target.checked} = e.target;
    //const [(e.target.value), (e.target.checked)] = e.target;
    //const [value, checked] = e.target;
    //return [value, checked];
    //const {(e.target.value), (e.target.checked)} = e.target;
    //const {(e.target.value): (e.target.checked)} = e.target;
    //const {value: checked} = e.target;
    //const {value, checked} = e.target;
  };

  return (
    <div className='form-wrap'>
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>
      <form>
        <div className='section'>
          <label>
            Hero Name
            <input
              type='text'
              value={heroName}
              onChange={e => setHeroName(e.target.value)}
            />
          </label>
          <label>
            Real Name
            <input
              type='password'
              value={realName}
              onChange={e => setRealName(e.target.value)}
            />
          </label>
        </div>
        <label className='section column'>
          How did you get your powers?
          <select value={powerSource} onChange={e => setPowerSource(e.target.value)}>
            <option value=''>
              Select one
            </option>
            {powerSourceOptions.map(source => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </label>
        <label className='section column'>
          List your powers (select all that apply):

          {powersOptions.map(power => (
            <label key={power}>
              <input
                type='checkbox'
                value={power}
                checked={powers.includes(power)}
                onChange={handlePowersChange}
              />
              <span>{power}</span>
            </label>
          ))}
        </label>
      </form>
    </div>
  )
};