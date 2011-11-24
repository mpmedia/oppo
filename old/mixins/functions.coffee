
types = try require '../types'
catch e then oppo.types

funcs = ->
  RT = this
  
  {getValue, getAllValues} = ((try (require '../eval_helpers')
  catch e then oppo.eval_helpers) RT)

  ###
  FUNCTIONS
  ###
  RT.apply = (fn, args..., ls) ->
    ls.unshift args...
    lsCopy = ls[0..]
    fn lsCopy...

  RT.curry = (fn, args...) ->
    fn.bind this, args...
  
try module.exports = funcs
catch e then oppo.mixins.functions = funcs