Algorithms in Bash
==================

 - [Why not use Bash for Algorithmic Interviews?](http://giocc.com/why-not-use-bash-for-algorithmic-interviews.html)
 

Quick Sort
----------

```sh
a=(4 1 3 2)

swap() {
  a[$1]=$4
  a[$3]=$2
}

quicksort() {
  local length=${#a[@]}
  quicksort_recursive 0 $(($length - 1))
}

quicksort_recursive() {
  local start=$1
  local end=$2
  if (($start >= $end)); then
    return
  fi

  local pivot=${a[$start]}
  local p q pvalue qvalue
  p=$(($start + 1))
  q=$end

  while (($p <= $q)); do
    qvalue=${a[$q]}
    if (($qvalue < $pivot)); then
      pvalue=${a[$p]}
      swap $p $pvalue $q $qvalue
      p=$(($p + 1))
    else
      q=$(($q - 1))
    fi 
  done

  swap $start $pivot $q $qvalue

  quicksort_recursive $start $(($q - 1))
  quicksort_recursive $(($q + 1)) $end
}
```

Fibonacci
---------
```sh
fib() {
  local n=$1
  case $n in
    1) return 1 ;;
    2) return 1 ;;
  esac

  fib $(($n - 1))
  local fib1=$?
  fib $(($n - 2))
  local fib2=$?

  return $(($fib1 + $fib2))
}
```
