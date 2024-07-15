import React from 'react';

const BlogDeets = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-[#D8D8D8] h-48 sm:h-96 w-11/12 sm:w-1/2 rounded-md mx-2 sm:mx-20 my-10"></div>
      </div>
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl font-bold">Integer rhoncus, orci vel ultricies fermentum</h1>
        <div className="text-xs text-[#979797] flex flex-col sm:flex-row justify-center sm:px-40 mt-6">
          <p className="sm:ml-96 ">By John Dahl Thomson</p>
          <p className="sm:ml-28 mr-60">12 September 2020</p>
        </div>
      </div>
      <div className="text-left px-4 sm:px-40 mt-10 sm:ml-72 mr-60">
        {[
          `Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt mollit anim est. laborum sed perspiciatis unde omnis natus error sit voluptatem accusantium dolore mque laudantium totam rem aperiam.`,
          `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque facilisis mi sed scelerisque finibus. Quisque pharetra neque sed lectus sollicitudin tempus. Aenean ut turpis blandit, mattis orci fringilla, efficitur felis. In at sodales sem. Nam quis turpis et metus ullamcorper volutpat. Ut nec odio vitae diam congue pharetra id id eros. Aliquam sit amet laoreet ex, non finibus nulla. In quis iaculis tellus, nec efficitur ligula. Nam ut leo sit amet magna rutrum faucibus vitae id diam. Etiam felis ligula, dictum eget maximus sit amet, accumsan nec velit.`,
          `Etiam eu quam magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vitae feugiat odio. Donec non risus auctor ante sollicitudin tincidunt. Cras nec aliquet ex, id mollis enim. Praesent maximus leo ac urna scelerisque, eget congue urna dapibus. Quisque at commodo metus.`,
          `Aenean ornare, lectus eget pulvinar ultricies, felis augue pharetra ante, dignissim viverra turpis ligula a risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique libero at orci dictum, a interdum ex fringilla. Phasellus convallis lectus a nunc eleifend, sed efficitur justo convallis. Curabitur pulvinar nulla risus, quis maximus elit posuere quis. Aenean id scelerisque lectus. Vestibulum varius neque quis ullamcorper dapibus. Quisque vulputate tristique dolor, at finibus velit. Nullam tempor sit amet felis vel efficitur. Integer congue maximus justo quis dapibus. Etiam dictum rutrum metus id venenatis. Morbi vel volutpat sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum, elit ac euismod faucibus, justo ligula dignissim nulla, sit amet ultrices tortor leo id mauris.`,
          `Nulla nec finibus massa, et varius turpis. Aliquam dignissim augue vel dolor aliquet vestibulum. Nulla malesuada, ipsum quis ornare ultricies, risus elit ultrices mauris, lacinia auctor eros metus eget elit. In efficitur dui erat, sit amet congue mi tristique sed. Aliquam nec leo sit amet diam ultricies blandit et vel tellus. Aliquam ipsum nunc, gravida sed tristique sed, elementum eu eros. Phasellus vitae sodales purus. Quisque sodales turpis nec tortor venenatis porta vel et nulla. Morbi ac mi in velit auctor efficitur tincidunt vel arcu. Vestibulum nec turpis metus. Mauris sollicitudin scelerisque semper. Curabitur ut suscipit est. Etiam a sodales dui, sed viverra turpis.`,
          `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque gravida magna sit amet velit maximus, non interdum velit laoreet. Vestibulum facilisis, enim sit amet blandit sollicitudin, arcu neque pellentesque dui, eu ullamcorper velit laoreet.`
        ].map((paragraph, idx) => (
          <p key={idx} className="text-[#979797] mt-10">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogDeets;

