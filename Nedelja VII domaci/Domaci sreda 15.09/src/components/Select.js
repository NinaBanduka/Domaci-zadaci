const Select = (options, def) =>
{
const select = document.createElement('select')
const defOpt = document.createElement('option')
defOpt.textContent = def
defOpt.value = '-1'
defOpt.selected = true
defOpt.disabled = true
defOpt.hidden = true

select.append(defOpt)

options.forEach(option => {
    
    const opt = document.createElement('option')
    opt.textContent = option
    opt.value = option
    select.append(opt)
});
return select
}

export default Select