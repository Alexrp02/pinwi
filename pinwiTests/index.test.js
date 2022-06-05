const {setFormMessage, clearInputError, setInputError} = require("./index")

global.confirm = () => true

test('QuerySelector devuelve null cuando se le proporciona objeto vacío', async()=>{
    //expect(index.loginUsername.value).toBe(index.signupUsername.value);
    expect(setFormMessage({
        querySelector: function(varia)
        {return {
            textContent: "",
            classList: {
                arr: [],
                add: function(variable) 
                {
                  this.arr.push(variable);
                },
                remove: function(variable)
                {
                  this.arr.pop(variable);
                }
              }
        }}
    })).toBe(undefined)
});

test('ClearInputError devuelve null cuando se le proporciona objeto vacío', async()=>{
    expect(clearInputError({
        classList: {
            arr: [],
            add: function(variable) 
            {
              this.arr.push(variable);
            },
            remove: function(variable)
            {
              this.arr.pop(variable);
            }
          },
          parentElement:
          {
              querySelector: function(varia)
              {
                  return 0
              }
          }
    })).toBe(undefined);
});

test('SetInputError devuelve null cuando se le proporciona objeto vacío', async()=>{
    expect(setInputError({
        classList: {
            arr: [],
            add: function(variable) 
            {
              this.arr.push(variable);
            },
            remove: function(variable)
            {
              this.arr.pop(variable);
            }
          },
          parentElement:
          {
              querySelector: function(varia)
              {
                  return 0
              }
          }
    })).toBe(undefined);
});
